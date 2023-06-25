import ProfileDropdown from "@/components/dropdown/ProfileDropdown";
import { MoreVertical, Star } from "lucide-react";

export const runtime = "edge";

const SingleBoardPage = async () => {
    return (
        <section
            title="single Board"
            className="px-4 pt-6 flex-1 flex flex-col gap-5"
        >
            {/* Top Section */}
            <div className="flex items-start justify-between">
                <h1>Single Board</h1>
                <div className="flex items-center gap-4">
                    <Star className="h-5 w-5" />
                    <MoreVertical className="h-5 w-5" />
                    <ProfileDropdown />
                </div>
            </div>
            {/* Bottom Section */}
            <div className="flex-1">
                <h1>Single Board Bottom Section</h1>
            </div>
        </section>
    );
};

export default SingleBoardPage;
