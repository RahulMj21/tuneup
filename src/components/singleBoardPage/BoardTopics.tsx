"use client";

import { Button } from "@/components/ui/Button";
import cn from "@/libs/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const BOARD_TOPICS = [
    { text: "Tasks", topic: "tasks" },
    { text: "Discussion", topic: "discussion" },
    { text: "Files", topic: "files" },
    { text: "Timeline", topic: "timeline" },
    { text: "Overview", topic: "overview" },
];

const BoardTopics = () => {
    const pathname = usePathname();
    const searchParams = useSearchParams();
    const router = useRouter();

    return (
        <div className="flex items-center pb-2">
            {BOARD_TOPICS.map(({ text, topic }) => (
                <Button
                    key={text}
                    variant="text"
                    onClick={() => router.push(`${pathname}?topic=${topic}`)}
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
