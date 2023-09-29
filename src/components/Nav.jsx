import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { useState, useEffect } from "react";

export default function Nav({ location, load, base }) {
    const [aboutPage, setAboutPage] = useState(false);

    useEffect(() => {
        if (location.pathname === `${base}about`) {
            setAboutPage(true);
        } else {
            setAboutPage(false);
        }
    });

    const colorNav = aboutPage ? "#FFFFFF" : "#000000";
    const opacity = load ? 0 : 1;

    const textHome = "HOME";
    const textAbout = "ABOUT";

    const lettersHome = textHome.split("");
    const lettersAbout = textAbout.split("");

    const [activeHome, setActiveHome] = useState(false);

    const [activeAbout, setActiveAbout] = useState(false);

    function whileHoverHome() {
        setActiveHome(true);
    }
    function whileLeaveHome() {
        setActiveHome(false);
    }

    function whileHoverAbout() {
        setActiveAbout(true);
    }
    function whileLeaveAbout() {
        setActiveAbout(false);
    }

    return (
        <>
            <header>
                <Link
                    to={`${base}`}
                    onMouseEnter={whileHoverHome}
                    onMouseLeave={whileLeaveHome}
                >
                    <motion.div
                        className="container-text"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: opacity,
                            transition: {
                                duration: 1,
                                ease: [0.76, 0, 0.24, 1],
                            },
                        }}
                    >
                        <motion.div className="text">
                            {lettersHome.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    animate={{
                                        y: activeHome ? "-100%" : 0,
                                        color: colorNav,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.03 * index,
                                        ease: [0.76, 0, 0.24, 1],
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}{" "}
                        </motion.div>
                        <motion.div className="text">
                            {lettersHome.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    animate={{
                                        y: activeHome ? "-100%" : 0,
                                        color: colorNav,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.03 * index,
                                        ease: [0.76, 0, 0.24, 1],
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}{" "}
                        </motion.div>
                    </motion.div>
                </Link>
                <Link
                    to={`${base}about`}
                    onMouseEnter={whileHoverAbout}
                    onMouseLeave={whileLeaveAbout}
                >
                    <motion.div
                        className="container-text"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: opacity,
                        }}
                        transition={{
                            duration: 1,
                            ease: [0.76, 0, 0.24, 1],
                        }}
                    >
                        <motion.div className="text">
                            {lettersAbout.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    animate={{
                                        y: activeAbout ? "-100%" : 0,
                                        color: colorNav,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.03 * index,
                                        ease: [0.76, 0, 0.24, 1],
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}{" "}
                        </motion.div>
                        <motion.div className="text">
                            {lettersAbout.map((letter, index) => (
                                <motion.span
                                    key={index}
                                    animate={{
                                        y: activeAbout ? "-100%" : 0,
                                        color: colorNav,
                                    }}
                                    transition={{
                                        duration: 0.5,
                                        delay: 0.03 * index,

                                        ease: [0.76, 0, 0.24, 1],
                                    }}
                                >
                                    {letter}
                                </motion.span>
                            ))}{" "}
                        </motion.div>
                    </motion.div>
                </Link>
            </header>
        </>
    );
}
