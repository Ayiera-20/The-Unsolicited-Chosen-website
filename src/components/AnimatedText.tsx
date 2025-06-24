import React, {useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface AnimatedTextProps {
    children:ReactNode;
    className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({ children }) => {
    const textRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const el = textRef.current;
        if(!el) return;
        gsap.fromTo(
            el,
            {
                opacity: 0,
                y: 50,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 90%",
                    end: "top 50%",
                    scrub: true,
                },
            }
        );

    }, []);
    return (
        <div ref={textRef}>
            {children}
        </div>
    );
};

export default AnimatedText;


