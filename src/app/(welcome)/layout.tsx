import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import MobileNav from "@/components/navigation/MobileNav";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const WelcomeLayout = ({ children }: Props) => {
    return (
        <div>
            <Header />
            <main className="min-h-[calc(100vh-6rem)]">{children}</main>
            <Footer />
            <MobileNav />
        </div>
    );
};

export default WelcomeLayout;
