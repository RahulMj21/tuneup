"use client";
import { LINKS } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEvent, useRef } from "react";

const Navbar = () => {
    const path = usePathname();
    const markerRef = useRef<HTMLDivElement | null>(null);

    const handleMouseOver = (e: MouseEvent<HTMLAnchorElement>) => {
        if (markerRef.current) {
            markerRef.current.style.opacity = "1";
            markerRef.current.style.left = e.currentTarget.offsetLeft + "px";
            markerRef.current.style.width = e.currentTarget.offsetWidth + "px";
        }
    };
    const handleMouseLeave = () => {
        if (markerRef.current) {
            markerRef.current.style.opacity = "0";
        }
    };

    return (
        <nav
            onMouseLeave={handleMouseLeave}
            className="flex items-center relative"
        >
            {LINKS.map(({ href, text }) => (
                <Link
                    key={text}
                    href={href}
                    onMouseOver={handleMouseOver}
                    className={`relative px-4 py-1 rounded-sm hover:text-color-light-2 transition-none ${
                        path === href
                            ? "text-color-light-1"
                            : "text-color-gray-1"
                    }`}
                >
                    {text}
                </Link>
            ))}
            <div
                ref={markerRef}
                className="absolute z-[-1] h-[2.25rem] rounded-md bg-color-dark-2 transition-all pointer-events-none"
            />
        </nav>
    );
};

export default Navbar;
