import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import UserAvatar from "@/components/common/UserAvatar";
import { Activity, User } from "lucide-react";
import { LogOut } from "lucide-react";

const ProfileDropdown = () => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    className="border-none"
                    src="https://github.com/shadcn.png"
                    fallback="RM"
                />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="min-w-[12rem]">
                <DropdownMenuLabel className="text-light-2">
                    My Account
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <div className="flex flex-col gap-1">
                    <DropdownMenuItem>
                        <User className="h-5 w-5" />
                        Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Activity className="h-5 w-5" /> Activity
                    </DropdownMenuItem>
                </div>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <LogOut className="h-5 w-5" /> Log Out
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default ProfileDropdown;
