import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface Props {
    children: ReactNode;
}

const DashboardLayout = ({ children }: Props) => {
    return (
        <div className="h-[100vh]">
            <Sidebar />
            <main className="min-h-[100vh] w-[calc(100%-4rem)] relative left-[4rem] p-4">
                {children}
            </main>
        </div>
    );
};

export default DashboardLayout;
