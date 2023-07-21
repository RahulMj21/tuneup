import cn from "@/libs/cn";
import { HTMLAttributes } from "react";

interface Props extends HTMLAttributes<HTMLSpanElement> {
    count: number;
}

const NotificationNumber = ({ count, className, ...props }: Props) => {
    return (
        <span
            className={cn(
                "h-5 w-5 bg-blue-3 flex rounded-full text-[0.75rem] leading-3 items-center justify-center text-light-1 font-semibold",
                className
            )}
            {...props}
        >
            {count}
        </span>
    );
};

export default NotificationNumber;
