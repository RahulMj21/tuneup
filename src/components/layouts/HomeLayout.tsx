import Header from "@/components/navigation/Header";
import Footer from "@/components/navigation/Footer";
import { ReactNode } from "react";
import { CustomContainer } from "@/components/styled/Layout";

interface Props {
    children: ReactNode;
}

const HomeLayout = ({ children }: Props) => {
    return (
        <div className="min-h-screen w-screen">
            <Header />
            <CustomContainer>
                {children}
                <Footer />
            </CustomContainer>
        </div>
    );
};

export default HomeLayout;
