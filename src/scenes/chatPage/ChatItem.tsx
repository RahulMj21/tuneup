import NotificationNumber from "@/components/common/NotificationNumber";
import UserAvatar from "@/components/common/UserAvatar";
import { CheckCheck } from "lucide-react";
import Link from "next/link";

interface Props {
    hasNew?: boolean;
}

const ChatItem = ({ hasNew }: Props) => {
    return (
        <Link href="/chat/1" className="flex items-center gap-2 cursor-pointer">
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
                <NotificationNumber count={5} />
            ) : (
                <CheckCheck className="h-4 w-4 text-green-1" />
            )}
        </Link>
    );
};

export default ChatItem;
