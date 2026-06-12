// Eenmalig hulpscript: genereert app-icons (favicon/icon/apple-icon)
// in de huisstijl: donkergroene gradient + lime "D".
const sharp = require("sharp");
const fs = require("fs");

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0A5A48"/>
      <stop offset="0.6" stop-color="#013F32"/>
      <stop offset="1" stop-color="#022B23"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="104" fill="url(#bg)"/>
  <circle cx="404" cy="108" r="26" fill="#E7FE25"/>
  <path fill="#E7FE25" fill-rule="evenodd" d="
    M 152 132
    H 258
    A 124 124 0 0 1 258 380
    H 152
    Z
    M 214 190
    V 322
    H 258
    A 66 66 0 0 0 258 190
    Z"/>
</svg>`;

(async () => {
  const base = sharp(Buffer.from(svg));
  await base.clone().resize(512, 512).png().toFile("app/icon.png");
  await sharp(Buffer.from(svg)).resize(180, 180).png().toFile("app/apple-icon.png");
  const png32 = await sharp(Buffer.from(svg)).resize(32, 32).png().toBuffer();
  const png16 = await sharp(Buffer.from(svg)).resize(16, 16).png().toBuffer();
  const toIco = (await import("png-to-ico")).default;
  fs.writeFileSync("app/favicon.ico", await toIco([png16, png32]));
  console.log("icons gegenereerd: app/icon.png, app/apple-icon.png, app/favicon.ico");
})();
