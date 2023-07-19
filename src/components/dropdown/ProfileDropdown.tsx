import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import UserAvatar from "@/components/common/UserAvatar";
import { Activity, ArrowRightLeft, User } from "lucide-react";
import { LogOut } from "lucide-react";
import cn from "@/libs/cn";

interface Props {
    className?: string;
}

const ProfileDropdown = ({ className }: Props) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger>
                <UserAvatar
                    className={cn("border-none", className)}
                    src=""
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
                    <DropdownMenuItem>
                        <ArrowRightLeft className="h-4 w-4" /> Switch Workspace
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
