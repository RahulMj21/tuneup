import CustomSearchInput from "@/components/formControls/CustomSearchInput";
import AddToFavouriteDialog from "@/components/dialog/AddToFavouriteDialog";
import BoardMembers from "@/scenes/singleBoardPage/BoardMembers";
import BoardTopics from "@/scenes/singleBoardPage/BoardTopics";
import BoardViews from "@/scenes/singleBoardPage/BoardViews";
import { Button } from "@/components/ui/Button";
import { IconButton } from "@/components/ui/IconButton";
import cn from "@/libs/cn";
import { IUser } from "@/types";
import { MoreVertical, SlidersHorizontal } from "lucide-react";
import { UserButton } from "@clerk/nextjs";

const USERS: IUser[] = [
    { id: "1", avatarUrl: "https://github.com/shadcn.png" },
    { id: "2", avatarUrl: "https://github.com/shadcn.png" },
    { id: "3", avatarUrl: "https://github.com/shadcn.png" },
    { id: "4", avatarUrl: "https://github.com/shadcn.png" },
    { id: "5", avatarUrl: "https://github.com/shadcn.png" },
];

const BoardTop = () => {
    return (
        <div className="flex flex-col gap-8">
            <div className="flex items-start justify-between">
                <h2>🏷️ Amazing Board</h2>
                <div className="flex items-center gap-2">
                    <CustomSearchInput
                        placeholder="Search..."
                        className="w-52"
                    />
                    <AddToFavouriteDialog />
                    <IconButton>
                        <MoreVertical className="h-5 w-5" />
                    </IconButton>
                    <UserButton
                        afterSignOutUrl="/sign-in"
                        afterSwitchSessionUrl="/dashboard"
                    />
                </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-5 pb-2 mt-1">
                <BoardTopics />
                <BoardMembers users={USERS} />
            </div>
            <div className="flex items-center justify-between border-b border-gray-5 py-4">
                <BoardViews />
                <Button
                    variant="text"
                    className={cn("text-light-3 hover:text-light-1 px-2 py-1")}
                >
                    <SlidersHorizontal className="h-4 w-4" /> Filter
                </Button>
            </div>
        </div>
    );
};

export default BoardTop;
