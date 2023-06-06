"use client";

import cn from "@/libs/cn";
import Link from "next/link";
import {
    Home,
    LayoutPanelLeft,
    Banknote,
    HeartHandshake,
    Contact2,
} from "lucide-react";
import { usePathname } from "next/navigation";
import { MouseEvent, useEffect, useRef } from "react";

export const LINKS = [
    { text: "Home", href: "/", icon: <Home /> },
    { text: "Dashboard", href: "/dashboard", icon: <LayoutPanelLeft /> },
    { text: "Pricing", href: "/pricing", icon: <Banknote /> },
    { text: "Support", href: "/support", icon: <HeartHandshake /> },
    { text: "Contact", href: "/contact", icon: <Contact2 /> },
];

const MobileNav = () => {
    const pathname = usePathname();
    const barRef = useRef<HTMLDivElement>(null);

    const isHomePage = pathname === "/" || pathname === "/home";

    const setBarPosition = (value: number) => {
        if (barRef.current) {
            barRef.current.style.left = `${value}px`;
            barRef.current.style.opacity = "1";
        }
    };

    const handleClick = (e: MouseEvent<HTMLDivElement>) => {
        setBarPosition(e.currentTarget.offsetLeft);
    };

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.querySelectorAll(".link-mobile").forEach((item) => {
                if (
                    item instanceof HTMLAnchorElement &&
                    item.href === window.location.href
                ) {
                    console.log("inside :", item.offsetLeft);
                    setBarPosition(item.offsetLeft);
                }
            });
        }
    }, []);

    return (
        <nav
            className={cn(
                "block sm:hidden fixed w-full bottom-0 left-0 border-t border-gray-3 backdrop-blur-[20rem]",
                !isHomePage && "bg-dark-1"
            )}
        >
            <div className="flex items-center justify-between gap-2 px-8">
                <div
                    ref={barRef}
                    className="absolute h-8 w-9 top-0 left-0 translate-x-[-19%] z-[-1] transition-all opacity-0"
                >
                    <div className="h-1 w-9 bg-light-2 rounded-full" />
                    <div className="bg-gradient-to-b from-white/25 to-transparent ufo-path h-8" />
                </div>
                {LINKS.map(({ icon, text, href }) => (
                    <Link
                        href={href}
                        key={text}
                        className={cn(
                            "text-gray-1 py-5 link-mobile",
                            pathname === href && "text-light-2"
                        )}
                    >
                        <div className="z-1" onClick={handleClick}>
                            {icon}
                        </div>
                    </Link>
                ))}
            </div>
        </nav>
    );
};

export default MobileNav;
