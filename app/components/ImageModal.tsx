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
    <dialog
      ref={dialogRef}
      className="img-modal-dialog"
      onClick={onClose}
      onCancel={onClose}
    >
      <button onClick={onClose} className="img-modal-close">✕</button>

      {src && (
        <img
          src={src}
          alt="Vergroot"
          onClick={e => e.stopPropagation()}
          className="img-modal-img"
          draggable={false}
        />
      )}
    </dialog>
  );
}
