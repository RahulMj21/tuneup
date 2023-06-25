import { ListChecks, SquareKanban, Table } from "lucide-react";
import { Button } from "@/components/ui/Button";

const VIEW_LIST = [
    { text: "Kanban", icon: <SquareKanban /> },
    { text: "Table", icon: <Table /> },
    { text: "List", icon: <ListChecks /> },
];

const BoardViews = () => {
    return (
        <div className="flex items-center gap-5">
            {VIEW_LIST.map(({ text, icon }) => (
                <Button key="text">
                    {icon}
                    {text}
                </Button>
            ))}
        </div>
    );
};

export default BoardViews;
