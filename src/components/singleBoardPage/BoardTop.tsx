import ProfileDropdown from "@/components/dropdown/ProfileDropdown";
import CustomSearchInput from "@/components/formControls/CustomSearchInput";
import BoardTopics from "@/components/singleBoardPage/BoardTopics";
import BoardViews from "@/components/singleBoardPage/BoardViews";
import { IconButton } from "@/components/ui/IconButton";
import { MoreVertical, Star } from "lucide-react";

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
                    <IconButton>
                        <Star className="h-5 w-5" />
                    </IconButton>
                    <IconButton>
                        <MoreVertical className="h-5 w-5" />
                    </IconButton>
                    <ProfileDropdown />
                </div>
            </div>
            <div className="flex items-center justify-between border-b border-gray-4">
                <BoardTopics />
                {/* USER_AVATARS WILL GO HERE */}
            </div>
            <div className="flex items-center justify-between">
                <BoardViews />
            </div>
        </div>
    );
};

export default BoardTop;
