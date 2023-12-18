import { ITask, ITaskColumn } from "@/types/board.types";

export const TASK_COLUMNS: ITaskColumn[] = [
    { id: "1", title: "TODO" },
    { id: "2", title: "IN PROGRES" },
    { id: "3", title: "CODE REVIEW" },
    { id: "4", title: "QA REVIEW" },
    { id: "5", title: "COMPLETED" },
];

export const TASKS: ITask[] = [
    {
        id: "1",
        title: "First Task",
        description:
            "This is the task description. As you can see it is quite easy to understand",
    },
    {
        id: "2",
        title: "Second Task",
        description:
            "This is the task description. As you can see it is quite easy to understand",
    },
    {
        id: "3",
        title: "Third Task",
        description:
            "This is the task description. As you can see it is quite easy to understand",
    },
    {
        id: "4",
        title: "Fourth Task",
        description:
            "This is the task description. As you can see it is quite easy to understand",
    },
    {
        id: "5",
        title: "Fifth Task",
        description:
            "This is the task description. As you can see it is quite easy to understand",
    },
];
