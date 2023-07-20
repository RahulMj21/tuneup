import ChatItem from "@/scenes/chatPage/ChatItem";
import Link from "next/link";
import { ReactNode } from "react";

interface Props {
    title: string;
    startIcon?: ReactNode;
}

const ChatGroup = ({ title, startIcon }: Props) => {
    return (
        <Link href="/chat/1">
            <div className="flex w-full flex-col gap-4">
                <p className="text-gray-1 font-semibold text-[0.813rem] uppercase flex items-center gap-1">
                    {startIcon}
                    {title}
                </p>
                <div className="flex flex-col gap-5">
                    <ChatItem hasNew />
                    <ChatItem hasNew />
                    <ChatItem />
                    <ChatItem />
                    <ChatItem />
                </div>
            </div>
        </Link>
    );
};

export default ChatGroup;
