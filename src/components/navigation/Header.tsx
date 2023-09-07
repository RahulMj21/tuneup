"use client";
import ProfileDropdown from "@/components/dropdown/ProfileDropdown";
import Logo from "@/components/icons/Logo";
import Navbar from "@/components/navigation/Navbar";
import LinkButton from "@/components/ui/LinkButton";
import { useUser } from "@clerk/nextjs";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const { isSignedIn } = useUser();

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
                {isSignedIn ? (
                    <>
                        <ProfileDropdown className="h-10 w-10" />
                    </>
                ) : (
                    <LinkButton variant="outline" href="/sign-in">
                        Get Started
                        <ArrowRight className="button-svg h-5 w-5" />
                    </LinkButton>
                )}
            </div>
        </header>
    );
};

export default Header;
