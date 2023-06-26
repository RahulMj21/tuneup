"use client";

import { Button } from "@/components/ui/Button";
import cn from "@/libs/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { MouseEvent, useRef } from "react";

const BOARD_TOPICS = [
    { text: "Tasks", topic: "tasks" },
    { text: "Backlog", topic: "backlog" },
    { text: "Discussion", topic: "discussion" },
    { text: "Files", topic: "files" },
    { text: "Timeline", topic: "timeline" },
    { text: "Overview", topic: "overview" },
];

const BoardTopics = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();
    const barRef = useRef<HTMLDivElement>(null);

    const handleMouseEnter = (e: MouseEvent<HTMLButtonElement>) => {
        if (barRef.current) {
            barRef.current.style.width = e.currentTarget.offsetWidth + "px";
            barRef.current.style.left = e.currentTarget.offsetLeft + "px";
            barRef.current.style.opacity = "1";
        }
    };
    const handleMouseLeave = () => {
        if (barRef.current) {
            barRef.current.style.opacity = "0";
        }
    };

    return (
        <div
            onMouseLeave={handleMouseLeave}
            className="flex items-center relative"
        >
            <div
                ref={barRef}
                className="absolute bg-dark-3 w-0 h-9 rounded-md transition-all pointer-events-none"
            />
            {BOARD_TOPICS.map(({ text, topic }) => (
                <Button
                    key={text}
                    variant="text"
                    onMouseEnter={handleMouseEnter}
                    onClick={() =>
                        router.push(
                            `${pathname}?topic=${topic}&view=${
                                searchParams.get("view") || ""
                            }`
                        )
                    }
                    className={cn(
                        "relative px-3 tracking-wide text-gray-1 hover:text-light-1 before:absolute before:w-4/5 before:-bottom-[0.625rem] before:h-[2.3px] before:rounded-full before:hidden before:bg-light-2 before:-translate-x-1/2 before:left-1/2 before:pointer-events-none transition-all",
                        searchParams.get("topic") === topic &&
                            "text-light-2 before:inline-block"
                    )}
                >
                    {text}
                </Button>
            ))}
        </div>
    );
};

export default BoardTopics;
