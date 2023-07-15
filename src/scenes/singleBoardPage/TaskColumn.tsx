import TaskCard from "@/scenes/singleBoardPage/TaskCard";
import { IconButton } from "@/components/ui/IconButton";
import { Circle, MoreVertical } from "lucide-react";

const TaskColumn = () => {
    return (
        <div className="w-60 flex flex-col gap-1">
            <div className="flex items-center justify-between">
                <p className="text-light-3 flex items-center gap-1 text-[0.835rem]">
                    <Circle className="stroke-transparent h-2 w-2 fill-error-1" />
                    TO-DO
                </p>
                <IconButton>
                    <MoreVertical className="h-4 w-4" />
                </IconButton>
            </div>
            <div className="flex-1 bg-gradient-to-b from-dark-4 to-dark-1 rounded-lg overflow-y-auto pb-4 flex flex-col gap-3">
                <TaskCard />
                <TaskCard />
                <TaskCard />
                <TaskCard />
            </div>
        </div>
    );
};

export default TaskColumn;
