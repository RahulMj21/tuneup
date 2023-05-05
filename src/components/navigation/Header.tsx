import { LinkButton } from "@/components/styled/Button";
import Logo from "@/components/navigation/Logo";
import Navbar from "@/components/navigation/Navbar";
import { FaArrowRight } from "react-icons/fa";
import { CustomContainer } from "@/components/styled/Layout";

const Header = () => {
    return (
        <header className="border-b border-gray-900">
            <CustomContainer className="flex items-center justify-between gap-8 py-6">
                <Logo />
                <Navbar />
                <LinkButton href="#" variant="hollow" className="group">
                    Get Started
                    <FaArrowRight className="custon-button-svg" />
                </LinkButton>
            </CustomContainer>
        </header>
    );
};

export default Header;
