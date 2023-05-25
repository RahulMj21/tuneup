"use client";

import { useEffect, useRef } from "react";

const Blob = () => {
    const blob = useRef<HTMLDivElement | null>(null);
    const animateBlob = (event: MouseEvent) => {
        const { clientX, clientY } = event;
        blob.current?.animate(
            {
                left: `${clientX}px`,
                top: `${clientY}px`,
            },
            { duration: 3000, fill: "forwards" }
        );
    };

    useEffect(() => {
        window.addEventListener("mousemove", animateBlob);

        return () => window.removeEventListener("mousemove", animateBlob);
    }, []);

    return (
        <div className="fixed top-0 left-0 h-[100vh] w-[100vw] overflow-hidden z-[-2]">
            <div className="blob-bg" />
            <div ref={blob} className="blob" />
        </div>
    );
};

export default Blob;
