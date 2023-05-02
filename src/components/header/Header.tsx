import { Button } from "@/components/buttons/Button";
import Logo from "@/components/header/Logo";
import Navbar from "@/components/header/Navbar";
import { FaArrowRight } from "react-icons/fa";

const Header = () => {
    return (
        <header>
            <Logo />
            <Navbar />
            <Button>
                Get Started <FaArrowRight fontSize="1.6rem" />
            </Button>
        </header>
    );
};

export default Header;
