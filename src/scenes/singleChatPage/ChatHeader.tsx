import UserAvatar from "@/components/common/UserAvatar";
import ProfileDropdown from "@/components/dropdown/ProfileDropdown";
import { IconButton } from "@/components/ui/IconButton";
import Separator from "@/components/ui/Separator";
import { MoreVertical, Search, Video } from "lucide-react";

const ChatHeader = () => {
    return (
        <div className="absolute top-0 left-0 w-full bg-gray-900/30 backdrop-blur-[1rem] px-6 h-[5rem] flex items-center justify-between z-48">
            <div className="flex items-center gap-4">
                <UserAvatar
                    src="https://github.com/shadcn.png"
                    fallback="RM"
                    className="h-11 w-11"
                />
                <div className="flex flex-col">
                    <h5 className="text-[0.938rem]">Radhe Shyam</h5>
                    <span className="text-[0.7rem] text-blue-2 font-semibold tracking-wide cursor-pointer">
                        22 Members
                    </span>
                </div>
            </div>
            <div className="flex items-center gap-1">
                <IconButton className="text-gray-1 hover:text-light-2">
                    <Search className="h-5 w-5" />
                </IconButton>
                <IconButton className="text-gray-1 hover:text-light-2">
                    <Video className="h-5 w-5" />
                </IconButton>
                <IconButton className="text-gray-1 hover:text-light-2">
                    <MoreVertical className="h-5 w-5" />
                </IconButton>
                <Separator className="h-7 bg-gray-3 mr-3" />
                <ProfileDropdown />
            </div>
        </div>
    );
};

export default ChatHeader;
