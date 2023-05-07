import Logo from "@/components/navigation/Logo";
import Navbar from "@/components/navigation/Navbar";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

const Header = () => {
    return (
        <header title="header" className="border-b border-gray-900">
            <div className="custom-container flex items-center justify-between gap-8 h-[6rem]">
                <Logo />
                <Navbar />
                <Link href="#" className="group btn btn-hollow cursor-pointer">
                    Get Started
                    <FaArrowRight className="custom-button-svg" />
                </Link>
            </div>
        </header>
    );
};

export default Header;
