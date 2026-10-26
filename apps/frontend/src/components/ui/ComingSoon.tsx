"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

export const ComingSoonButton = ({
  children,
  className,
  message = "Coming Soon",
}: {
  children: React.ReactNode;
  className?: string;
  message?: string;
}) => {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);
  const [pos, setPos] = useState<{ top: number; left: number } | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Hide toast on scroll so it never appears to "drift" with the page
  useEffect(() => {
    if (!pos) return;
    const hide = () => setPos(null);
    window.addEventListener("scroll", hide, { passive: true });
    window.addEventListener("wheel", hide, { passive: true });
    window.addEventListener("touchmove", hide, { passive: true });
    return () => {
      window.removeEventListener("scroll", hide);
      window.removeEventListener("wheel", hide);
      window.removeEventListener("touchmove", hide);
    };
  }, [pos]);

  const handleClick = () => {
    const el = btnRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    setPos({
      top: rect.bottom + 8,
      left: rect.left + rect.width / 2,
    });
    window.setTimeout(() => setPos(null), 2200);
  };

  return (
    <>
      <button ref={btnRef} type="button" onClick={handleClick} className={className}>
        {children}
      </button>

      {mounted &&
        pos &&
        createPortal(
          <div
            role="status"
            style={{
              position: "fixed",
              top: pos.top,
              left: pos.left,
              transform: "translateX(-50%)",
              zIndex: 2147483647,
              pointerEvents: "none",
              margin: 0,
              padding: 0,
              border: 0,
            }}
          >
            <span className="whitespace-nowrap rounded-full border border-[#E9E8E1] bg-white px-3 py-1 font-['Space_Grotesk'] text-[11px] font-semibold uppercase tracking-[0.6px] text-[#747878] shadow-[0px_4px_20px_rgba(0,0,0,0.03)]">
              {message}
            </span>
          </div>,
          document.body
        )}
    </>
  );
};