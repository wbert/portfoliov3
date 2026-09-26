"use client";

import { useRef, useState } from "react";
import { ExternalLink, Maximize2, X } from "lucide-react";

export function ProjectPreview({
  title,
  href,
  embedHref = href,
  label = "Preview site",
}: {
  title: string;
  href: string;
  embedHref?: string;
  label?: string;
}) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="text-link project-preview-trigger"
        aria-haspopup="dialog"
        aria-label={`Preview ${title}`}
        onClick={() => {
          setOpen(true);
          dialogRef.current?.showModal();
        }}
      >
        {label}
        <Maximize2 aria-hidden="true" className="h-3.5 w-3.5" />
      </button>
      <dialog
        ref={dialogRef}
        className="project-preview"
        data-scroll-lock
        aria-label={`${title} website preview`}
        onClose={() => {
          setOpen(false);
          triggerRef.current?.focus({ preventScroll: true });
        }}
        onClick={(event) => {
          if (event.target !== event.currentTarget) return;
          const bounds = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < bounds.left || event.clientX > bounds.right ||
            event.clientY < bounds.top || event.clientY > bounds.bottom
          ) dialogRef.current?.close();
        }}
      >
        <div className="project-preview__header">
          <h2>{title}</h2>
          <div className="project-preview__actions">
            <a href={href} target="_blank" rel="noopener noreferrer" className="text-link">
              Open in new tab
              <ExternalLink aria-hidden="true" className="h-3.5 w-3.5" />
            </a>
            <button
              type="button"
              className="project-preview__close"
              aria-label="Close preview"
              autoFocus
              onClick={() => dialogRef.current?.close()}
            >
              <X aria-hidden="true" className="h-5 w-5" />
            </button>
          </div>
        </div>
        <p className="project-preview__note">
          Preview unavailable or sign-in not working? Open the site in a new tab.
        </p>
        {open && (
          <iframe
            className="project-preview__frame"
            src={embedHref}
            title={`${title} live website`}
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-popups-to-escape-sandbox allow-downloads"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          />
        )}
      </dialog>
    </>
  );
}
