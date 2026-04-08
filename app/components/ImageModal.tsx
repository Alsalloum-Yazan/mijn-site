"use client";

import { useEffect, useRef } from "react";

/**
 * ImageModal — gebruikt <dialog> + showModal() zodat de overlay
 * altijd gecentreerd in het viewport staat, ongeacht CSS transforms
 * of `perspective` op ancestor-elementen (zoals html { perspective: 1px }).
 */
export default function ImageModal({
  src,
  onClose,
}: {
  src: string | null;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (src) {
      if (!dialog.open) dialog.showModal();
      document.body.style.overflow = "hidden";
    } else {
      if (dialog.open) dialog.close();
      document.body.style.overflow = "";
    }
  }, [src]);

  useEffect(() => {
    return () => { document.body.style.overflow = ""; };
  }, []);

  return (
    <>
      <style>{`
        dialog.img-modal-dialog::backdrop {
          background: rgba(0, 0, 0, 0.9);
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }
      `}</style>

      <dialog
        ref={dialogRef}
        className="img-modal-dialog"
        onClick={onClose}
        onCancel={onClose}
        style={{
          border: "none",
          padding: 0,
          margin: "auto",
          background: "transparent",
          width: "100vw",
          height: "100dvh",
          maxWidth: "100vw",
          maxHeight: "100dvh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "20px", right: "20px",
            background: "rgba(255,255,255,0.1)", border: "1px solid rgba(255,255,255,0.15)",
            borderRadius: "50%", width: "42px", height: "42px",
            color: "#fff", fontSize: "18px", cursor: "pointer",
            display: "flex", alignItems: "center", justifyContent: "center",
            flexShrink: 0,
          }}
        >
          ✕
        </button>

        {src && (
          <img
            src={src}
            alt="Vergroot"
            onClick={e => e.stopPropagation()}
            style={{
              maxWidth: "92vw",
              maxHeight: "88dvh",
              borderRadius: "16px",
              objectFit: "contain",
              boxShadow: "0 32px 80px rgba(0,0,0,0.8)",
              cursor: "default",
              display: "block",
            }}
            draggable={false}
          />
        )}
      </dialog>
    </>
  );
}
