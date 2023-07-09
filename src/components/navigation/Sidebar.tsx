import Logo from "@/components/icons/Logo";
import Link from "next/link";
import SidebarLinks from "@/components/navigation/SidebarLinks";

const Sidebar = () => {
    return (
        <div className="border-r border-gray-3 h-100vh py-6 px-1 w-16 fixed top-0 left-0 h-[100vh] flex flex-col items-center gap-14">
            <Link href="/">
                <Logo height={35} width={40} />
            </Link>
            <SidebarLinks />
        </div>
    );
};

export default Sidebar;
