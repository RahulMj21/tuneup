"use client";

import cn from "@/libs/cn";
import {
    CalendarRange,
    LayoutDashboard,
    ListChecks,
    MessagesSquare,
    Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SIDEBAR_LINKS = [
    { text: "Dashboard", href: "/dashboard", icon: <LayoutDashboard /> },
    { text: "Boards", href: "/boards", icon: <ListChecks /> },
    { text: "Chat", href: "/chat", icon: <MessagesSquare /> },
    { text: "Events", href: "/events", icon: <CalendarRange /> },
    { text: "Team", href: "/team", icon: <Users /> },
];

const SidebarLinks = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-col items-center w-full gap-8">
            {SIDEBAR_LINKS.map(({ text, href, icon }) => (
                <Link
                    title={text}
                    href={href}
                    key={href}
                    className={cn(
                        "text-gray-1 link-mobile transition-all hover:text-light-2",
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
