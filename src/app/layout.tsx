import "@/app/globals.css";
import cn from "@/libs/cn";
import { Open_Sans, Roboto } from "next/font/google";
import { ReactNode } from "react";

const roboto = Roboto({
    weight: ["300", "400", "500", "700"],
    subsets: ["latin"],
    variable: "--font-roboto",
    display: "swap",
});
const open_sans = Open_Sans({
    weight: ["400", "500", "600", "700"],
    subsets: ["latin"],
    variable: "--font-open-sans",
    display: "swap",
});

export const metadata = {
    title: "TuneUp",
    description: "Generated by create next app",
};

interface Props {
    children: ReactNode;
}

const BaseLayout = ({ children }: Props) => {
    return (
        <html lang="en" className={cn(roboto.variable, open_sans.variable)}>
            <body>
                <div className="min-h-screen w-full overflow-x-hidden">
                    {children}
                </div>
            </body>
        </html>
    );
};

export default BaseLayout;
