import Logo from "@/components/icons/Logo";
import SidebarLinks from "@/components/navigation/SidebarLinks";
import Link from "next/link";
import SidebarBottom from "@/components/navigation/SidebarBottom";
import { HTMLAttributes } from "react";
import cn from "@/libs/cn";

const Sidebar = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
    return (
        <div
            className={cn(
                "z-[9999] border-r border-gray-5 h-100vh py-6 px-1 w-16 fixed top-0 left-0 h-[100vh] flex flex-col items-center gap-14",
                className
            )}
            {...props}
        >
            <Link href="/">
                <Logo height={35} width={40} />
            </Link>
            <SidebarLinks />
            <SidebarBottom />
        </div>
    );
};

export default Sidebar;
