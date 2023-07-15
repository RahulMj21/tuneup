import UserAvatar from "@/components/common/UserAvatar";
import { CheckCheck } from "lucide-react";

interface Props {
    hasNew?: boolean;
}

const ChatItem = ({ hasNew }: Props) => {
    return (
        <div className="flex items-center gap-2 cursor-pointer">
            <UserAvatar src="https://github.com/shadcn.png" fallback="RM" />
            <div className="flex-1 flex flex-col gap-[0.4rem]">
                <p className="text-light-2 leading-4 text-[0.938rem]">
                    Radhe Shyam
                </p>
                <span className="text-gray-1 text-[0.813rem] font-semibold leading-3">
                    02:45 pm
                </span>
            </div>
            {hasNew ? (
                <span className="h-5 w-5 bg-blue-1 flex rounded-full text-[0.75rem] leading-3 items-center justify-center text-light-1 font-semibold">
                    5
                </span>
            ) : (
                <CheckCheck className="h-4 w-4 text-green-1" />
            )}
        </div>
    );
};

export default ChatItem;
