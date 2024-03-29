import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const AuthLayout = ({ children }: Props) => {
    return (
        <main className="min-h-[calc(100vh-6rem)] flex items-center justify-center">
            {children}
        </main>
    );
};

export default AuthLayout;
