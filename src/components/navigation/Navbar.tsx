"use client";

import { LINKS } from "@/utils/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
    const path = usePathname();

    return (
        <nav className="flex items-center relative">
            {LINKS.map(({ href, text }) => (
                <Link
                    key={text}
                    href={href}
                    className={`relative px-4 py-1 rounded-sm hover:text-color-light-2 transition-all ${
                        path === href
                            ? "text-color-light-1"
                            : "text-color-gray-1"
                    }`}
                >
                    {text}
                </Link>
            ))}
        </nav>
    );
};

export default Navbar;
