import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";
import { IconButton } from "@/components/ui/IconButton";
import Separator from "@/components/ui/Separator";
import cn from "@/libs/cn";
import { Plus } from "lucide-react";

const USERS = [
    { id: 1, src: "https://github.com/shadcn.png" },
    { id: 2, src: "https://github.com/shadcn.png" },
    { id: 3, src: "https://github.com/shadcn.png" },
    { id: 4, src: "https://github.com/shadcn.png" },
    { id: 5, src: "https://github.com/shadcn.png" },
];

const BoardMembers = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="relative flex items-center h-12">
                {USERS.map((user, idx) => (
                    <div
                        key={user.id}
                        className={cn(
                            `absolute right-0 cursor-pointer inline-block hover:z-[999] group`
                        )}
                        style={{
                            transform: `translateX(-${65 * idx}%)`,
                        }}
                    >
                        <Avatar
                            className="group-hover:mb-2 transition-all"
                            title={String(user.id)}
                        >
                            <AvatarImage src={idx === 0 ? "" : user.src} />
                            <AvatarFallback>
                                {idx === 0 ? "10+" : "RM"}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                ))}
            </div>
            <Separator className="h-8" />
            <div>
                <IconButton
                    variant="outlined"
                    title="Add Member"
                    className="text-gray-1 hover:text-light-2"
                >
                    <Plus className="h-5 w-5" />
                </IconButton>
            </div>
        </div>
    );
};

export default BoardMembers;
