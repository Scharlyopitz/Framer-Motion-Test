import { motion } from "framer-motion";
import { delayAbout } from "../components/Animation";
import { revealTextAbout } from "../components/Animation";
import TextAbout from "../components/TextAbout";

export default function About() {
    const h1 = "BIENVENUE SUR LA PAGE ABOUT !";

    const letters = h1.split("");

    return (
        <>
            <motion.section
                // initial={{ scaleY: 0 }}
                // animate={{ scaleY: 1 }}
                // transition={{
                //     duration: 1,
                //     ease: [0.76, 0, 0.24, 1],
                // }}
                id="about"
            >
                <motion.div
                    initial={{
                        top: "10%",
                        left: "20%",
                        clipPath: "polygon(100% 0, 0 0, 0 100%, 100% 100%)",
                    }}
                    animate={{
                        bottom: 0,
                        top: 0,
                        width: "100%",
                        height: "100%",
                        left: 0,
                    }}
                    transition={{
                        duration: 0.7,
                        ease: [0.65, 0, 0.35, 1],
                        delay: 0.2,
                    }}
                    exit={{
                        clipPath:
                            "polygon(100% 0, 100% 0, 100% 100%, 100% 100%)",
                        transition: { duration: 0.5 },
                    }}
                    className="image"
                ></motion.div>
                <motion.div
                    variants={delayAbout}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className="textAbout"
                >
                    {letters.map((letter, index) => (
                        <motion.h1
                            variants={revealTextAbout}
                            key={index}
                            style={{
                                width: "10px",
                                textAlign: "center",
                                margin: "0 2px",
                            }}
                        >
                            {letter}
                        </motion.h1>
                    ))}
                </motion.div>

                <TextAbout />
            </motion.section>
        </>
    );
}
