import { motion, useScroll, useTransform } from "framer-motion";
import { delay } from "../components/Animation";
import { delayImage } from "../components/Animation";
import { revealText } from "../components/Animation";
import { revealImage } from "../components/Animation";

import { useState } from "react";

import { useRef } from "react";

export default function Home() {
    const [active, setActive] = useState(false);

    const constraintsRef = useRef();

    // FONCTION POUR PRENDRE LA VALEUR DU SCROLL SUR TOUTE LA PAGE AVEC "USESCROLL" PUIS UTILISATION DE USETRANSFORM QUI VA PRENDRE EN PARAMETRE LE SCROLL ET DIRE ENSUITE DANS NOTRE CAS DE 0 A 50% ([0,0.5]) ALORS TU VAS ALLER DE 0% VERS 100% (["0", "100%"]).

    const { scrollYProgress } = useScroll();
    const toBottom = useTransform(scrollYProgress, [0, 0.5], ["0", "100%"]);
    const toTop = useTransform(scrollYProgress, [0, 0.5], ["0", "-100%"]);

    const lettersWelcome = "WELCOME".split("");

    const lettersHome = "HOME".split("");

    return (
        <>
            <motion.section id="home">
                <motion.button
                    exit={{ opacity: 0, transition: { duration: 0.5 } }}
                    onClick={() => setActive(!active)}
                >
                    click me
                </motion.button>
                <motion.div
                    variants={delayImage}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                >
                    <motion.div
                        // ANIMATION DE DRAG AND DROP AVEC "DRAG" POUR L'ANIMATION "DRAGCONTAINER" POUR ZONER L'ANIMATION (ON PEUT AUSSI METTRE (top:0,left:0,right:0,bottom:0)) ET "REF" POUR PRENDRE EN REFERENCE LE CONTAINER DANS LEQUEL ON LIMITE LA ZONE.
                        ref={constraintsRef}
                        drag
                        dragConstraints={constraintsRef}
                        // __________________________

                        variants={revealImage}
                        className="image"
                        key={1}
                        animate={{
                            top: active ? "10%" : null,
                            left: active ? "20%" : null,
                            transition: {
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                            },
                        }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        style={{ y: toBottom }}
                    ></motion.div>
                    <motion.div
                        variants={revealImage}
                        className="image"
                        key={2}
                        animate={{
                            top: active ? "10%" : null,
                            left: active ? "20%" : null,
                            transition: {
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                            },
                        }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        style={{ y: toBottom }}
                    ></motion.div>
                    <motion.div
                        variants={revealImage}
                        className="image"
                        key={3}
                        animate={{
                            top: active ? "10%" : null,
                            left: active ? "20%" : null,
                            transition: {
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                            },
                        }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        style={{ y: toTop }}
                    ></motion.div>
                    <motion.div
                        variants={revealImage}
                        className="image"
                        key={4}
                        animate={{
                            top: active ? "10%" : null,
                            left: active ? "20%" : null,
                            transition: {
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                            },
                        }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                    ></motion.div>
                    <motion.div
                        variants={revealImage}
                        className="image"
                        key={5}
                        animate={{
                            top: active ? "10%" : null,
                            left: active ? "20%" : null,
                            transition: {
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                            },
                        }}
                        transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                        style={{ y: toBottom }}
                    ></motion.div>
                </motion.div>
                <div className="text-container">
                    <motion.div
                        variants={delay}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="welcome"
                    >
                        {lettersWelcome.map((letterWelcome, idx) => {
                            return (
                                <motion.h1 key={idx} variants={revealText}>
                                    {letterWelcome}
                                </motion.h1>
                            );
                        })}
                    </motion.div>

                    <motion.div
                        variants={delay}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="home"
                    >
                        {lettersHome.map((letterHome, idx) => {
                            return (
                                <motion.h1 key={idx} variants={revealText}>
                                    {letterHome}
                                </motion.h1>
                            );
                        })}
                    </motion.div>
                </div>
            </motion.section>
        </>
    );
}
