"use client";
import { TASK_COLUMNS } from "@/mocks";
import TaskColumn from "@/scenes/singleBoardPage/TaskColumn";
import { ITaskColumn } from "@/types/board.types";
import {
    DndContext,
    DragEndEvent,
    DragOverlay,
    DragStartEvent,
} from "@dnd-kit/core";
import { SortableContext, arrayMove } from "@dnd-kit/sortable";
import { useMemo, useState } from "react";
import { createPortal } from "react-dom";

const BoardBottom = () => {
    const [columns, setColumns] = useState<ITaskColumn[]>(TASK_COLUMNS);
    const [activeColumn, setActiveColumn] = useState<ITaskColumn | null>(null);
    const columnIds = useMemo(() => TASK_COLUMNS.map(({ id }) => id), []);

    const handleDragStart = (e: DragStartEvent) => {
        if (e.active.data.current?.type === "Column") {
            setActiveColumn(e.active.data.current.column);
        }
    };

    const handleDragEnd = (e: DragEndEvent) => {
        const { active, over } = e;
        if (!over) return;
        if (active.id === over.id) return;

        setColumns((prev) => {
            const activeColumnIndex = prev.findIndex(
                (item) => item.id === active.id
            );
            const overColumnIndex = prev.findIndex(
                (item) => item.id === over.id
            );
            return arrayMove(columns, activeColumnIndex, overColumnIndex);
        });
    };

    return (
        <div className="flex-1 flex overflow-x-hidden">
            <div className="flex w-full overflow-x-auto">
                <DndContext
                    onDragStart={handleDragStart}
                    onDragEnd={handleDragEnd}
                >
                    <div className="flex gap-5">
                        <SortableContext items={columnIds}>
                            {columns.map((column) => (
                                <TaskColumn key={column.id} column={column} />
                            ))}
                        </SortableContext>
                    </div>
                    {typeof window !== "undefined" &&
                        createPortal(
                            <DragOverlay>
                                {activeColumn && (
                                    <TaskColumn column={activeColumn} />
                                )}
                            </DragOverlay>,
                            window.document.body
                        )}
                </DndContext>
            </div>
        </div>
    );
};

export default BoardBottom;
