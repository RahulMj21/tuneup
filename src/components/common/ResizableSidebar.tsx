"use client";

import { IconButton } from "@/components/ui/IconButton";
import cn from "@/libs/cn";
import { ChevronRight } from "lucide-react";
import { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
    children: ReactNode;
}

const ResizableSidebar = ({ children }: Props) => {
    const [toggle, setToggle] = useState(false);
    const sidebarRef = useRef<HTMLDivElement>(null);
    const resizeRef = useRef<HTMLDivElement>(null);
    let x = 0;
    let w = 0;

    const handleMouseMove = (e: MouseEvent) => {
        if (!sidebarRef.current) return;
        const dx = e.clientX - x;
        const cw = w + dx;

        if (cw > 200 && cw < 500) {
            sidebarRef.current.style.width = `${cw}px`;
        } else if (cw < 200) {
            sidebarRef.current.style.width = `0px`;
            setToggle(true);
        }
    };
    const handleMouseUp = () => {
        document.removeEventListener("mousedown", handleMouseDown);
        document.removeEventListener("mousemove", handleMouseMove);
    };

    const handleMouseDown = (e: MouseEvent) => {
        if (!sidebarRef.current || toggle) return;
        x = e.clientX;
        const sbWidth = window.getComputedStyle(
            sidebarRef.current as Element
        ).width;
        w = parseInt(sbWidth, 10);

        document.addEventListener("mousemove", handleMouseMove);
        document.addEventListener("mouseup", handleMouseUp);
    };

    useEffect(() => {
        resizeRef.current?.addEventListener("mousedown", handleMouseDown);

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="relative group/sidebar flex flex-col">
            <div
                ref={sidebarRef}
                className={cn(
                    "flex-1 visible border-r border-gray-5 pt-6 flex flex-col gap-6 relative overflow-hidden",
                    toggle && "w-0 invisible"
                )}
                style={{ width: toggle ? "0" : "17.5rem" }}
            >
                {children}
            </div>

            <div
                ref={resizeRef}
                className={cn(
                    "z-50 absolute top-0 right-0 w-1 h-full bg-transparent transition-all hover:bg-blue-1 cursor-w-resize",
                    toggle &&
                        "hover:bg-transparent cursor-default pointer-events-none"
                )}
            ></div>
            <IconButton
                className={cn(
                    "absolute hidden group-hover/sidebar:flex top-[72%] right-0 text-blue-2 translate-x-1/2 p-1 rotate-180 bg-dark-1 hover:bg-dark-1 active:bg-dark-2 border-2 z-50 transition-transform",
                    toggle && "flex rotate-0"
                )}
                variant="outlined"
                aria-label="toggle sidebar"
                onClick={() => setToggle((prev) => !prev)}
            >
                <ChevronRight className="w-4 h-4 color-blue" />
            </IconButton>
        </div>
    );
};

export default ResizableSidebar;
