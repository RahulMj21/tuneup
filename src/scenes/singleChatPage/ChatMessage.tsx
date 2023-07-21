import UserAvatar from "@/components/common/UserAvatar";
import { IconButton } from "@/components/ui/IconButton";
import cn from "@/libs/cn";

interface Props {
    userName: string;
    message: string;
}

const ChatMessage = ({ userName, message }: Props) => {
    return (
        <div className="flex gap-2">
            <UserAvatar
                src="https://avatars.githubusercontent.com/u/77981238?s=400&u=b21bc0441702510ebe48b88bdeaaeccbfda0201e&v=4"
                fallback="RS"
                className="w-12 h-12"
            />
            <div className="flex flex-col items-start gap-1 group/message">
                <div>
                    <span className="text-[0.98rem]">{userName}</span>
                    <span className="text-[0.75rem] text-gray-1 font-semibold ml-3">
                        20.08 am
                    </span>
                </div>
                <div className="px-4 py-[0.625rem] bg-gray-4 rounded-lg rounded-tl-none text-light-3 relative">
                    {message}
                    <div
                        className={cn(
                            "absolute flex opacity-0 pointer-events-none transition-all translate-y-2 group-hover/message:pointer-events-auto group-hover/message:translate-y-0 group-hover/message:opacity-100 -bottom-[1.6rem] right-0 bg-dark-2 px-2 py-1 items-center gap-1 rounded-lg",
                            message.length < 15 && "-right-20"
                        )}
                    >
                        <IconButton className="h-6 w-6 p-0 text-[0.75rem]">
                            👍
                        </IconButton>
                        <IconButton className="h-6 w-6 p-0 text-[0.75rem]">
                            🚀
                        </IconButton>
                        <IconButton className="h-6 w-6 p-0 text-[0.75rem]">
                            🎉
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
