import Navbar from "@/components/navigation/Navbar";
import LinkButton from "@/components/ui/LinkButton";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Logo from "@/components/icons/Logo";

const Header = () => {
    return (
        <header
            title="header"
            className="border-b border-gray-5 backdrop-blur-[7rem]"
        >
            <div className="custom-container flex items-center justify-between gap-8 h-[6rem]">
                <Link href="/">
                    <Logo height={38} width={44} />
                </Link>
                <Navbar />
                <LinkButton variant="outline" href="#">
                    Get Started
                    <ArrowRight className="button-svg h-5 w-5" />
                </LinkButton>
            </div>
        </header>
    );
};

export default Header;
