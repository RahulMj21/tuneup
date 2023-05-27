import Logo from "@/components/navigation/Logo";
import Navbar from "@/components/navigation/Navbar";
import LinkButton from "@/components/ui/LinkButton";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
        <header
            title="header"
            className="border-b border-gray-900 backdrop-blur-[7rem]"
        >
            <div className="custom-container flex items-center justify-between gap-8 h-[6rem]">
                <Logo />
                <Navbar />
                <LinkButton variant="outline" href="#">
                    Get Started
                    <FaArrowRight className="button-svg" />
                </LinkButton>
            </div>
        </header>
    );
};

export default Header;
