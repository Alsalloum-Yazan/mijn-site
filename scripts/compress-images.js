// Eenmalig hulpscript: comprimeert afbeeldingen in public/ groter dan 400KB
// en verkleint alles breder dan 1600px. Bestandsnamen blijven gelijk.
const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

function walk(dir, out = []) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

(async () => {
  const imgs = walk("public").filter((f) =>
    [".png", ".jpg", ".jpeg"].includes(path.extname(f).toLowerCase())
  );
  for (const f of imgs) {
    const orig = fs.statSync(f).size;
    if (orig / 1024 < 400) continue;
    const ext = path.extname(f).toLowerCase();
    const meta = await sharp(f).metadata();
    let pipe = sharp(f);
    if (meta.width > 1600) pipe = pipe.resize({ width: 1600 });
    const buf =
      ext === ".png"
        ? await pipe.png({ palette: true, quality: 90, compressionLevel: 9 }).toBuffer()
        : await pipe.jpeg({ quality: 82, mozjpeg: true }).toBuffer();
    if (buf.length < orig * 0.85) {
      fs.writeFileSync(f, buf);
      console.log(
        f,
        Math.round(orig / 1024) + "KB -> " + Math.round(buf.length / 1024) + "KB",
        meta.width > 1600 ? "(resized van " + meta.width + "px)" : ""
      );
    } else {
      console.log("skip (weinig winst):", f);
    }
  }
})();
