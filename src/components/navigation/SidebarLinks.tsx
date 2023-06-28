"use client";

import cn from "@/libs/cn";
import {
    CalendarCheck,
    Hourglass,
    LayoutDashboard,
    ListChecks,
    MessagesSquare,
    Settings,
    Users,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const SIDEBAR_LINKS = [
    {
        text: "Dashboard",
        href: "/dashboard",
        icon: <LayoutDashboard height="1.25rem" width="1.25rem" />,
    },
    {
        text: "Boards",
        href: "/boards",
        icon: <ListChecks height="1.25rem" width="1.25rem" />,
    },
    {
        text: "Chat",
        href: "/chat",
        icon: <MessagesSquare height="1.25rem" width="1.25rem" />,
    },
    {
        text: "Events",
        href: "/events",
        icon: <CalendarCheck height="1.25rem" width="1.25rem" />,
    },
    {
        text: "Hours",
        href: "/hours",
        icon: <Hourglass height="1.25rem" width="1.25rem" />,
    },
    {
        text: "Team",
        href: "/team",
        icon: <Users height="1.25rem" width="1.25rem" />,
    },
    {
        text: "Settings",
        href: "/settings",
        icon: <Settings height="1.25rem" width="1.25rem" />,
    },
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
                        "text-gray-2 link-mobile transition-all hover:text-light-2",
                        pathname.includes(href) && "text-light-1"
                    )}
                >
                    {icon}
                </Link>
            ))}
        </div>
    );
};

export default SidebarLinks;
