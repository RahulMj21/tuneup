"use client";
import ProfileDropdown from "@/components/dropdown/ProfileDropdown";
import Logo from "@/components/icons/Logo";
import Navbar from "@/components/navigation/Navbar";
// import LinkButton from "@/components/ui/LinkButton";
// import { ArrowRight } from "lucide-react";
import Link from "next/link";

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
                <ProfileDropdown className="h-10 w-10" />
                {/* <LinkButton size="medium" variant="outline" href="/sign-in">
                    Sign In
                    <ArrowRight className="button-svg h-5 w-5" />
                </LinkButton> */}
            </div>
        </header>
    );
};

export default Header;
