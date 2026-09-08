import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import SubscribeForm from "./subscribe";

const backdrop = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.83, 0, 0.17, 1] },
  },
  exit: { opacity: 0, transition: { duration: 0.3, ease: [0.83, 0, 0.17, 1] } },
};

const card = {
  initial: { opacity: 0, y: 24 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1], delay: 0.05 },
  },
  exit: {
    opacity: 0,
    y: 24,
    transition: { duration: 0.3, ease: [0.83, 0, 0.17, 1] },
  },
};

const SubscribeModal = ({
  open,
  onClose,
  title = (
    <>
      Sign up with email to receive news
      <br />
      and updates from Locavore NXT
    </>
  ),
}) => {
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
    };

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          key="subscribe-backdrop"
          variants={backdrop}
          initial="initial"
          animate="animate"
          exit="exit"
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-sm px-6"
          role="dialog"
          aria-modal="true"
          aria-label="Subscribe to the NXT letter"
        >
          <motion.div
            key="subscribe-card"
            variants={card}
            initial="initial"
            animate="animate"
            exit="exit"
            onClick={(event) => event.stopPropagation()}
            className="relative w-full max-w-md bg-offBlack text-white border border-white rounded-xl px-8 py-10 max-md:px-6 max-md:py-8"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 w-6 h-6 setflex-center transition-opacity duration-300 hover:opacity-50"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path
                  d="M1 1L13 13M13 1L1 13"
                  stroke="white"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <h2 className="text-2xl max-md:text-xl font-normal leading-snug pr-8">
              {title}
            </h2>

            <SubscribeForm className="mt-6 max-w-full" onSuccess={onClose} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SubscribeModal;
