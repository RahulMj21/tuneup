"use client";
import { TASK_COLUMNS } from "@/mocks";
import TaskColumn from "@/scenes/singleBoardPage/TaskColumn";
import { DndContext } from "@dnd-kit/core";
import { SortableContext } from "@dnd-kit/sortable";
import { useMemo } from "react";

const BoardBottom = () => {
    const columnIds = useMemo(() => TASK_COLUMNS.map(({ id }) => id), []);

    return (
        <div className="flex-1 flex overflow-x-hidden">
            <div className="flex w-full overflow-x-auto">
                <DndContext>
                    <div className="flex gap-5">
                        <SortableContext items={columnIds}>
                            {TASK_COLUMNS.map((column) => (
                                <TaskColumn key={column.id} column={column} />
                            ))}
                        </SortableContext>
                    </div>
                </DndContext>
            </div>
        </div>
    );
};

export default BoardBottom;
