"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

declare global {
  interface Window {
    turnstile?: {
      ready: (callback: () => void) => void;
      render: (
        container: string | HTMLElement,
        options: Record<string, unknown>
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}

type DownloadState = "idle" | "widget" | "verifying" | "success" | "error";

export default function ResumeDownloadButton() {
  const [state, setState] = useState<DownloadState>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [showModal, setShowModal] = useState(false);
  const widgetIdRef = useRef<string | null>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Full cleanup: remove turnstile widget + clear container
  const cleanup = () => {
    if (widgetIdRef.current && window.turnstile) {
      try {
        window.turnstile.remove(widgetIdRef.current);
      } catch {
        /* ignore */
      }
    }
    widgetIdRef.current = null;
    // Nuke all children from the wrapper so Turnstile sees a fresh container
    if (wrapperRef.current) {
      wrapperRef.current.innerHTML = "";
    }
  };

  useEffect(() => {
    if (!showModal) return;

    // 1. Inject script if needed
    const scriptId = "__cf_turnstile_script";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.id = scriptId;
      s.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit&onload=__cfTurnstileOnLoad";
      s.async = true;
      document.head.appendChild(s);
    }

    // 2. Render the widget
    const render = () => {
      const wrapper = wrapperRef.current;
      if (!wrapper || !window.turnstile) return;

      // Create a brand-new div each time so Turnstile never complains
      cleanup();
      const fresh = document.createElement("div");
      wrapper.appendChild(fresh);

      widgetIdRef.current = window.turnstile.render(fresh, {
        sitekey: process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY,
        theme: "dark",
        size: "normal",
        callback: (token: string) => {
          handleToken(token);
        },
        "error-callback": () => {
          setErrorMsg("Verification failed. Please try again.");
          closeWithError();
        },
        "expired-callback": () => {
          setErrorMsg("Verification expired. Please try again.");
          closeWithError();
        },
      });
    };

    // If script already loaded, render directly; otherwise use the onload callback
    if (window.turnstile) {
      render();
    } else {
      (window as unknown as Record<string, unknown>).__cfTurnstileOnLoad =
        render;
    }

    return () => {
      cleanup();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [showModal]);

  const handleToken = async (token: string) => {
    setState("verifying");
    try {
      const res = await fetch("/api/download-resume", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token }),
      });
      if (!res.ok) {
        const d = await res.json();
        throw new Error(d.error || "Verification failed");
      }
      const blob = await res.blob();
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "RESUME_PIYUSH_PAUL.pdf";
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      setState("success");
      setTimeout(() => {
        cleanup();
        setState("idle");
        setShowModal(false);
      }, 1500);
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Download failed");
      closeWithError();
    }
  };

  const closeWithError = () => {
    setState("error");
    setTimeout(() => {
      cleanup();
      setState("idle");
      setShowModal(false);
    }, 3000);
  };

  const handleClick = () => {
    cleanup();
    setState("widget");
    setShowModal(true);
  };

  const handleClose = () => {
    cleanup();
    setState("idle");
    setShowModal(false);
  };

  return (
    <>
      <button
        onClick={handleClick}
        disabled={showModal}
        className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-medium border border-gold text-gold hover:bg-gold hover:text-white rounded-sm px-8 py-3.5 transition-all duration-500 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" y1="15" x2="12" y2="3" />
        </svg>
        {state === "success"
          ? "Downloaded ✓"
          : state === "verifying"
            ? "Downloading..."
            : "Download Resume"}
      </button>

      {/* ── Modal ── */}
      <AnimatePresence>
        {showModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[9999] flex items-center justify-center"
            onClick={(e) => {
              if (e.target === e.currentTarget && state === "widget")
                handleClose();
            }}
          >
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

            <motion.div
              initial={{ opacity: 0, scale: 0.92, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.92, y: 16 }}
              transition={{ duration: 0.25, ease: [0.25, 0.1, 0.25, 1] }}
              className="relative z-[10000] bg-[var(--color-bg)] border border-border rounded-md p-8 max-w-md w-[90%] shadow-2xl"
            >
              {state === "widget" && (
                <button
                  onClick={handleClose}
                  className="absolute top-4 right-4 text-text-dim hover:text-text transition-colors cursor-pointer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              )}

              <h3
                className="text-lg font-medium tracking-tight mb-2 text-text"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                Quick Verification
              </h3>
              <p className="text-text-muted text-xs tracking-wide mb-6">
                Complete this quick check to download the resume.
              </p>

              {/*
                Wrapper is ALWAYS in the DOM while modal is open.
                A fresh child div is created inside it for each render.
              */}
              <div
                ref={wrapperRef}
                className="flex justify-center min-h-[65px]"
                style={{ display: state === "widget" ? "flex" : "none" }}
              />

              {state === "verifying" && (
                <div className="flex flex-col items-center gap-3 py-4">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      duration: 1,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="w-6 h-6 border-2 border-gold border-t-transparent rounded-full"
                  />
                  <span className="text-text-muted text-xs tracking-wide">
                    Preparing download…
                  </span>
                </div>
              )}

              {state === "success" && (
                <div className="flex flex-col items-center gap-2 py-4">
                  <span className="text-gold text-2xl">✓</span>
                  <span className="text-text-muted text-xs tracking-wide">
                    Download started!
                  </span>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {state === "error" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[10001] bg-red-900/90 border border-red-700/50 text-red-200 text-xs tracking-wide px-6 py-3 rounded-md shadow-lg backdrop-blur-sm"
          >
            {errorMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
