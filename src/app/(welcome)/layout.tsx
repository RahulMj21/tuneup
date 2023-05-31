import Footer from "@/components/navigation/Footer";
import Header from "@/components/navigation/Header";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const WelcomeLayout = ({ children }: Props) => {
    return (
        <>
            <Header />
            <main className="min-h-[calc(100vh-6rem)]">{children}</main>
            <Footer />
        </>
    );
};

export default WelcomeLayout;
