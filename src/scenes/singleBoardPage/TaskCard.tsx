"use client";

import TaskDetailsDialog from "@/components/dialog/TaskDetailsDialog";
import { IconButton } from "@/components/ui/IconButton";
import TaskAssignees from "@/scenes/singleBoardPage/TaskAssignees";
import { IUser } from "@/types";
import { ITask } from "@/types/board.types";
import { MessageCircle, MoreVertical, Paperclip } from "lucide-react";
import { useState } from "react";

const USERS: IUser[] = [
    { id: "1", avatarUrl: "https://github.com/shadcn.png" },
    { id: "2", avatarUrl: "https://github.com/shadcn.png" },
    { id: "3", avatarUrl: "https://github.com/shadcn.png" },
];

interface Props {
    task: ITask;
}

const TaskCard = ({ task }: Props) => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <TaskDetailsDialog {...{ open, setOpen }} />
            <div
                onClick={() => setOpen(true)}
                className="bg-gray-4 py-3 rounded-lg flex flex-col border border-gray-5 group/card cursor-pointer"
            >
                <div className="px-2 flex flex-col gap-1 border-b border-gray-5 pb-3">
                    <div className="flex items-center justify-between">
                        <h5 className="text-light-2 tracking-wide">
                            {task.title}
                        </h5>
                        <IconButton className="opacity-0 group-hover/card:opacity-100">
                            <MoreVertical className="h-4 w-4" />
                        </IconButton>
                    </div>
                    <p className="text-light-4 text-[0.938rem] leading-[1.1rem] tracking-normal">
                        {task.description}
                    </p>
                </div>
                <div className="flex items-center justify-between pt-2 px-2">
                    <div className="flex gap-3 text-light-4">
                        <div className="flex items-center text-[0.875rem] gap-1">
                            <MessageCircle className="h-[0.875rem] w-[0.875rem]" />
                            2
                        </div>
                        <div className="flex items-center text-[0.875rem] gap-1">
                            <Paperclip className="h-[0.875rem] w-[0.875rem]" />{" "}
                            4
                        </div>
                    </div>
                    <TaskAssignees users={USERS} />
                </div>
            </div>
        </>
    );
};

export default TaskCard;
