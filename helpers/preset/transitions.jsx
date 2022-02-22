export const fade = {
  initial: { opacity: 0 },
  enter: {
    opacity: 1,
    transition: { duration: .5, ease: [0.83, 0, 0.17, 1], delay: .15  }
  },
  exit: {
    opacity: 0,
    transition: { duration: .5, ease: [0.83, 0, 0.17, 1] }
  }
}