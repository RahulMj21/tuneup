"use client";

import cn from "@/libs/cn";
import {
    LayoutPanelLeft,
    MessagesSquare,
    Presentation,
    Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SIDEBAR_LINKS = [
    { href: "/dashboard", icon: <LayoutPanelLeft /> },
    { href: "/boards", icon: <Presentation /> },
    { href: "/chat", icon: <MessagesSquare /> },
    { href: "/team", icon: <Users /> },
];

const SidebarLinks = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center w-full gap-8">
            {SIDEBAR_LINKS.map(({ href, icon }) => (
                <Link
                    href={href}
                    key={href}
                    className={cn(
                        "text-gray-1 link-mobile transition-all",
                        pathname === href && "text-light-2"
                    )}
                >
                    {icon}
                </Link>
            ))}
        </div>
    );
};

export default SidebarLinks;
