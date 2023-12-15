import UserAvatar from "@/components/common/UserAvatar";
import ChatReactions from "@/scenes/singleChatPage/ChatReactions";

interface Props {
    userName: string;
    message: string;
}

const ChatMessage = ({ userName, message }: Props) => {
    return (
        <div className="flex gap-2">
            <UserAvatar
                src="https://github.com/rahulmj21.png"
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
                    <ChatReactions message={message} />
                </div>
            </div>
        </div>
    );
};

export default ChatMessage;
