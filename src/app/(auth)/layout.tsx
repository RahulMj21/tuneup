import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import MobileNav from "@/components/navigation/MobileNav";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const WelcomeLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
                {children}
            </main>
            <Footer />
            <MobileNav />
        </>
    );
};

export default WelcomeLayout;
