import { IconButton } from "@/components/ui/IconButton";
import cn from "@/libs/cn";

interface Props {
    message: string;
}

const ChatReactions = ({ message }: Props) => {
    return (
        <div
            className={cn(
                "z-[999] absolute flex opacity-0 pointer-events-none transition-all translate-y-2 group-hover/message:pointer-events-auto group-hover/message:translate-y-0 group-hover/message:opacity-100 -bottom-[1.6rem] right-0 bg-dark-2 px-2 py-1 items-center gap-1 rounded-lg",
                message.length < 15 && "-right-20"
            )}
        >
            <IconButton className="h-6 w-6 p-0 text-[0.75rem]">👍</IconButton>
            <IconButton className="h-6 w-6 p-0 text-[0.75rem]">🚀</IconButton>
            <IconButton className="h-6 w-6 p-0 text-[0.75rem]">🎉</IconButton>
        </div>
    );
};

export default ChatReactions;
