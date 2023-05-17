"use client";
import { usePathname } from "next/navigation";

const Footer = () => {
    const path = usePathname();

    return path !== "/dashboard" ? (
        <footer className="border-t border-gray-900">
            <div className="custom-container flex justify-center p-4">
                Radhe❣️Shyam
            </div>
        </footer>
    ) : (
        <></>
    );
};

export default Footer;
