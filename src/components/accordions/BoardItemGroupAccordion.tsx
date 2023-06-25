"use client";

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion";
import cn from "@/libs/cn";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

interface Props {
    title: string;
}

const DUMMY_BOARDS = [
    { id: "1", title: "🏷️ First Board" },
    { id: "2", title: "🏷️ Second Board" },
    { id: "3", title: "🏷️ Third Board" },
    { id: "4", title: "🏷️ Fourth Board" },
    { id: "5", title: "🏷️ Fifth Board" },
    { id: "6", title: "🏷️ Sixth Board" },
];

const BoardItemGroupAccordion = ({ title }: Props) => {
    const params = useParams();
    const id = params?.id;

    return (
        <AccordionItem key={title} value={title} data-state="open">
            <AccordionTrigger className="text-[1rem] text-light-3 py-2 gap-2 justify-start tracking-wide">
                <ChevronRight className="h-[1.12rem] w-[1.12rem] transition-all" />
                {title}
            </AccordionTrigger>
            <AccordionContent>
                <div className="flex flex-col text-gray-1 gap-2">
                    {DUMMY_BOARDS.map((item) => (
                        <Link
                            href={`/boards/${item.id}`}
                            key={item.id}
                            className={cn(
                                "text-gray-1 py-[0.35rem] pl-2 tracking-wide rounded-full",
                                id &&
                                    id === item.id &&
                                    "text-light-2 bg-gradient-to-r from-dark-2 to-dark-3"
                            )}
                        >
                            {item.title}
                        </Link>
                    ))}
                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

export default BoardItemGroupAccordion;
