import cn from "@/libs/cn";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    oriantation?: "vertical" | "horizontal";
}

const Separator = ({
    className,
    oriantation = "vertical",
    ...props
}: Props) => {
    return (
        <div
            className={cn(
                "h-full w-[1px] bg-gray-3",
                oriantation === "horizontal" && "h-[1px] w-full",
                className
            )}
            {...props}
        />
    );
};

export default Separator;
