import TaskColumn from "@/scenes/singleBoardPage/TaskColumn";

const BoardBottom = () => {
    return (
        <div className="flex-1 flex overflow-x-hidden">
            <div className="flex w-full overflow-x-auto">
                <div className="flex gap-5">
                    <TaskColumn />
                    <TaskColumn />
                    <TaskColumn />
                    <TaskColumn />
                    <TaskColumn />
                </div>
            </div>
        </div>
    );
};

export default BoardBottom;
