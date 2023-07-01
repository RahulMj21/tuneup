import TaskAssignees from "@/components/singleBoardPage/TaskAssignees";
import { IconButton } from "@/components/ui/IconButton";
import { IUser } from "@/types";
import { MessageCircle, MoreVertical, Paperclip } from "lucide-react";

const USERS: IUser[] = [
    { id: "1", avatarUrl: "https://github.com/shadcn.png" },
    { id: "2", avatarUrl: "https://github.com/shadcn.png" },
    { id: "3", avatarUrl: "https://github.com/shadcn.png" },
];

const Task = () => {
    return (
        <div className="bg-gray-4 py-3 rounded-lg flex flex-col border border-gray-3 group/card cursor-pointer">
            <div className="px-2 flex flex-col gap-1 border-b border-gray-3 pb-3">
                <div className="flex items-center justify-between">
                    <h5 className="text-light-1 tracking-wide">Task Title</h5>
                    <IconButton className="opacity-0 group-hover/card:opacity-100">
                        <MoreVertical className="h-4 w-4" />
                    </IconButton>
                </div>
                <p className="text-light-4 text-[0.938rem] leading-[1.1rem] tracking-normal">
                    This is the task description. As you can see it is quite
                    easy to understand
                </p>
            </div>
            <div className="flex items-center justify-between pt-2 px-2">
                <div className="flex gap-3 text-light-4">
                    <div className="flex items-center text-[0.875rem] gap-1">
                        <MessageCircle className="h-[0.875rem] w-[0.875rem]" />2
                    </div>
                    <div className="flex items-center text-[0.875rem] gap-1">
                        <Paperclip className="h-[0.875rem] w-[0.875rem]" /> 4
                    </div>
                </div>
                <TaskAssignees users={USERS} />
            </div>
        </div>
    );
};

export default Task;
