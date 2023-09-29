import { motion } from "framer-motion";
import { loaderText } from "./Animation";
import { delayText } from "./Animation";

export default function Loader({ setLoad }) {
    return (
        <>
            <motion.div
                animate={{
                    display: "none",
                    transition: { delay: 3 },
                }}
                onAnimationComplete={() => setLoad(false)}
                className="loader"
            >
                <motion.div
                    variants={delayText}
                    initial="initial"
                    animate="animate"
                >
                    <motion.p
                        variants={loaderText}
                        animate={{
                            scale: 200,
                            rotate: "-70deg",
                            transition: {
                                duration: 0.5,
                                delay: 2.5,
                                ease: [0.7, 0, 0.84, 0],
                            },
                        }}
                    >
                        R
                    </motion.p>
                    <motion.p variants={loaderText}>.</motion.p>
                    <motion.p
                        variants={loaderText}
                        animate={{
                            x: "-100%",
                            transition: {
                                duration: 0.5,
                                ease: [0.76, 0, 0.24, 1],
                                delay: 2,
                            },
                        }}
                    >
                        .
                    </motion.p>
                    <motion.p
                        variants={loaderText}
                        animate={{
                            x: "-200%",
                            transition: {
                                duration: 0.5,
                                ease: [0.76, 0, 0.24, 1],
                                delay: 2,
                            },
                        }}
                    >
                        .
                    </motion.p>
                </motion.div>
            </motion.div>
        </>
    );
}
