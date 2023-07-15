import { ReactNode } from "react";

interface Props {
    title: string;
    startIcon?: ReactNode;
}

const ChatGroup = ({ title, startIcon }: Props) => {
    return (
        <div className="flex w-full flex-col gap-2 my-2">
            <p className="text-gray-1 font-semibold text-[0.813rem] uppercase flex items-center gap-1">
                {startIcon}
                {title}
            </p>
        </div>
    );
};

export default ChatGroup;
