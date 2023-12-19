import { IconButton } from "@/components/ui/IconButton";
import { TASKS } from "@/mocks";
import TaskCard from "@/scenes/singleBoardPage/TaskCard";
import { ITaskColumn } from "@/types/board.types";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { Circle, MoreVertical } from "lucide-react";

interface Props {
    column: ITaskColumn;
}

const TaskColumn = ({ column }: Props) => {
    const { title, id } = column;
    const {
        setNodeRef,
        attributes,
        listeners,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: id,
        data: {
            type: "Column",
            column,
        },
    });

    const style = {
        transition,
        transform: CSS.Transform.toString(transform),
        zIndex: isDragging ? 999 : 1,
    };

    if (isDragging)
        return (
            <div
                ref={setNodeRef}
                style={style}
                className="w-64 flex flex-col gap-1 bg-dark-4 rounded-md border-2 border-error-2 opacity-90"
            />
        );

    return (
        <div
            ref={setNodeRef}
            style={style}
            className="w-64 flex flex-col gap-1 bg-dark-1"
        >
            <div
                {...attributes}
                {...listeners}
                className="flex items-center justify-between px-1 cursor-move"
            >
                <p className="text-light-3 flex items-center gap-1 text-[0.835rem]">
                    <Circle className="stroke-transparent h-2 w-2 fill-error-1" />
                    {title}
                </p>
                <IconButton>
                    <MoreVertical className="h-4 w-4" />
                </IconButton>
            </div>
            <div className="flex-1 bg-gradient-to-b from-dark-4 to-dark-1 rounded-lg overflow-y-auto pb-4 flex flex-col gap-3">
                {TASKS.map((task) => (
                    <TaskCard key={task.id} task={task} />
                ))}
            </div>
        </div>
    );
};

export default TaskColumn;
