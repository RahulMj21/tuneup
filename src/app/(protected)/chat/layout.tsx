import ChatBar from "@/scenes/chatPage/ChatBar";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
}

const BoardsLayout = ({ children }: Props) => {
    return (
        <div className="flex h-[100vh] w-full">
            <ChatBar />
            {children}
        </div>
    );
};

export default BoardsLayout;
