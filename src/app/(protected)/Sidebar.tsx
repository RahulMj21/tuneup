import Logo from "@/components/icons/Logo";
import Link from "next/link";

const Sidebar = () => {
    return (
        <div className="border-r border-gray-3 h-100vh py-4 px-1 w-16 fixed top-0 left-0 h-[100vh] flex flex-col items-center">
            <Link href="/">
                <Logo height={35} width={40} />
            </Link>
        </div>
    );
};

export default Sidebar;
