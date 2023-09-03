"use client";
import UserAvatar from "@/components/common/UserAvatar";
import SignOutDialog from "@/components/dialog/SignOutDialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useClerk } from "@clerk/nextjs";
import { Activity, ArrowRightLeft, LogOut, User } from "lucide-react";
import { useState } from "react";

interface Props {
    className?: string;
}

const ProfileDropdown = ({ className }: Props) => {
    const [open, setOpen] = useState(false);
    const { openUserProfile, loaded, user } = useClerk();

    return (
        <>
            <SignOutDialog {...{ open, setOpen }} />
            <DropdownMenu>
                <DropdownMenuTrigger className="rounded-full">
                    <UserAvatar
                        className={className}
                        src={loaded && user ? user.imageUrl : ""}
                        fallback=""
                    />
                </DropdownMenuTrigger>
                <DropdownMenuContent className="min-w-[12rem]">
                    <DropdownMenuLabel className="text-light-2">
                        My Account
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <div className="flex flex-col gap-1">
                        <DropdownMenuItem onClick={() => openUserProfile()}>
                            <User className="h-5 w-5" />
                            Profile
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Activity className="h-5 w-5" /> Activity
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <ArrowRightLeft className="h-4 w-4" /> Switch
                            Workspace
                        </DropdownMenuItem>
                    </div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onSelect={() => setOpen(true)}>
                        <LogOut className="h-5 w-5" /> Sign Out
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default ProfileDropdown;
