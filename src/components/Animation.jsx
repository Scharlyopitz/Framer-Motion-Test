export const delay = {
    animate: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.03,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.03,
        },
    },
};

export const delayImage = {
    animate: {
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1,
        },
    },
};

export const revealText = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: { duration: 0.5, ease: [0.83, 0, 0.17, 1] },
    },
    exit: {
        y: "-100%",
        transition: { duration: 0.5, ease: [0.85, 0, 0.15, 1] },
    },
};

export const revealImage = {
    initial: {
        clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)",
    },
    animate: {
        clipPath: "polygon(0 0%, 100% 0%, 100% 100%, 0% 100%)",
        transition: { duration: 1, ease: [0.33, 1, 0.68, 1] },
    },
    exit: {
        clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
        transition: { duration: 0.5, ease: [0.33, 1, 0.68, 1] },
    },
};

// LOADER

export const loaderText = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] },
    },
};

export const delayText = {
    initial: {
        overflow: "hidden",
    },
    animate: {
        overflow: "visible",
        transition: {
            delayChildren: 0.5,
            staggerChildren: 0.05,
            delay: 2,
        },
    },
};

// ABOUT

const delayChildrenAbout = 0.8;

export const delayAbout = {
    animate: {
        transition: {
            delayChildren: delayChildrenAbout,
            staggerChildren: 0.01,
        },
    },
};

export const revealTextAbout = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
    },
    exit: {
        y: "-100%",
        transition: { duration: 0.2, ease: [0.85, 0, 0.15, 1] },
    },
};

export const delayRevealLorem = {
    animate: {
        transition: {
            delayChildren: delayChildrenAbout,
            staggerChildren: 0.05,
        },
    },
    exit: {
        transition: {
            staggerChildren: 0.02,
            staggerDirection: -1,
        },
    },
};

export const revealLorem = {
    initial: {
        y: "100%",
    },
    animate: {
        y: 0,
        transition: { duration: 1, ease: [0.25, 1, 0.5, 1] },
    },
    exit: {
        y: "-100%",
        transition: { duration: 0.2, ease: [0.25, 1, 0.5, 1] },
    },
};
