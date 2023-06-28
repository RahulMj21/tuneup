"use client";

import { List, SquareKanban, Table } from "lucide-react";
import { Button } from "@/components/ui/Button";
import cn from "@/libs/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const VIEW_LIST = [
    {
        text: "Kanban",
        view: "kanban",
        icon: <SquareKanban className="h-5 w-5" />,
    },
    { text: "Table", view: "table", icon: <Table className="h-5 w-5" /> },
    { text: "List", view: "list", icon: <List className="h-5 w-5" /> },
];

const BoardViews = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    return (
        <div className="flex items-center gap-3">
            {VIEW_LIST.map(({ text, view, icon }) => (
                <Button
                    key={text}
                    onClick={() =>
                        router.push(
                            `${pathname}?topic=${
                                searchParams.get("topic") || ""
                            }&view=${view}`
                        )
                    }
                    className={cn(
                        "px-2 py-1 rounded-md text-[0.875rem] text-gray-1 bg-transparent",
                        searchParams.get("view") === view &&
                            "bg-dark-3 text-light-2"
                    )}
                >
                    {icon}
                    {text}
                </Button>
            ))}
        </div>
    );
};

export default BoardViews;
