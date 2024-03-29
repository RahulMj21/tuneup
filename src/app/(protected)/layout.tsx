import { ReactNode } from "react";
import Sidebar from "@/components/navigation/Sidebar";

interface Props {
    children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="h-[100vh]">
            <Sidebar />
            <main className="z-1 min-h-[100vh] w-[calc(100%-4rem)] relative left-[4rem]">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
