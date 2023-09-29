import { Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { AnimatePresence, motion } from "framer-motion";

import About from "../pages/About";
import Home from "../pages/Home";
import Error from "../pages/Error";
import Loader from "./Loader";
import Nav from "./Nav";

export default function AnimatedRoutes() {
    const [load, setLoad] = useState(true);

    const base = "/Framer-Motion-Test/";

    // AJOUT DE "USELOCATION" DANS ROUTES POUR QUE LES ANIMATIONS ENTRE PAGE FONTIONNENT + "ANIMATEDPRESENCE" POUR QUE LA FONCTION "EXIT" DES ANIMATIONS SOIENT PRIS EN COMPTE.

    const location = useLocation();
    return (
        <>
            <AnimatePresence>
                <Nav location={location} load={load} base={base} />
                {load ? (
                    <Loader setLoad={setLoad} load={load} />
                ) : (
                    <Routes location={location} key={location.pathname}>
                        <Route path={`${base}`} element={<Home />} />

                        <Route path={`${base}about`} element={<About />} />
                        <Route path="*" element={<Error />} />
                    </Routes>
                )}
            </AnimatePresence>
        </>
    );
}
