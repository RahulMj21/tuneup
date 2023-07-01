import { MoreVertical } from "lucide-react";
import { IconButton } from "@/components/ui/IconButton";

const TaskColumn = () => {
    return (
        <div className="w-56 flex flex-col gap-1">
            {/* Column Name */}
            <div className="flex items-center justify-between">
                <p className="text-light-3">New Request</p>
                <IconButton>
                    <MoreVertical className="h-4 w-4" />
                </IconButton>
            </div>
            {/* Column Tasks */}
            <div className="flex-1 bg-gradient-to-b from-gray-4 to-dark-1 rounded-lg"></div>
        </div>
    );
};

export default TaskColumn;
