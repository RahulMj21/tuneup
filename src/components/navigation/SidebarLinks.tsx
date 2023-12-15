"use client";

import cn from "@/libs/cn";
import {
    CalendarCheck,
    Hourglass,
    LayoutDashboard,
    MessagesSquare,
    Settings,
    SquareKanban,
    Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SIDEBAR_LINKS = [
    {
        text: "Chat",
        href: "/chat",
        icon: <MessagesSquare className="h-5 w-5" />,
    },
    {
        text: "Boards",
        href: "/boards",
        icon: <SquareKanban className="h-5 w-5" />,
    },
    {
        text: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboard className="h-5 w-5" />,
    },
    {
        text: "Events",
        href: "/events",
        icon: <CalendarCheck className="h-5 w-5" />,
    },
    {
        text: "Hours",
        href: "/hours",
        icon: <Hourglass className="h-5 w-5" />,
    },
    {
        text: "Team",
        href: "/team",
        icon: <Users className="h-5 w-5" />,
    },
    {
        text: "Settings",
        href: "/settings",
        icon: <Settings className="h-5 w-5" />,
    },
];

const SidebarLinks = () => {
    const pathname = usePathname();

    return (
        <div className="flex flex-1 flex-col items-center w-full gap-8">
            {SIDEBAR_LINKS.map(({ text, href, icon }) => (
                <Link
                    title={text}
                    href={href}
                    key={href}
                    className={cn(
                        "text-gray-2 link-mobile transition-all",
                        pathname.includes(href)
                            ? "text-light-1"
                            : "hover:text-light-2"
                    )}
                >
                    {icon}
                </Link>
            ))}
        </div>
    );
};

export default SidebarLinks;
