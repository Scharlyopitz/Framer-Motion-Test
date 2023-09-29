import { motion } from "framer-motion";
import { delayRevealLorem, revealLorem } from "./Animation";

export default function TexAbout() {
    const texts = [
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit.",
        "Doloremque velit temporibus illo. Molestias, facilis",
        "provident officia quos obcaecati quo aliquid fugit. Adipisci",
        "veritatis beatae distinctio qui! Perspiciatis repellat",
    ];

    return (
        <>
            <motion.div
                className="containerLorem"
                variants={delayRevealLorem}
                initial="initial"
                animate="animate"
                exit="exit"
            >
                <TextParagraph texts={texts} />
                <TextParagraph texts={texts} />
                <TextParagraph texts={texts} />
            </motion.div>
        </>
    );
}

function TextParagraph({ texts }) {
    return (
        <>
            {texts.map((text, idx) => {
                return (
                    <div key={idx}>
                        <motion.p variants={revealLorem}>{text}</motion.p>
                    </div>
                );
            })}
        </>
    );
}
