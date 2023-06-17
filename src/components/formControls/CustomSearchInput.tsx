import cn from "@/libs/cn";
import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const CustomSearchInput = ({ className, ...props }: Props) => {
    return (
        <div className="relative">
            <Search
                height="1.1rem"
                width="1.1rem"
                className="absolute pointer-events-none text-gray-1 translate-x-2 translate-y-[0.406rem]"
            />
            <input
                className={cn(
                    "bg-gradient-to-r from-dark-3 to-dark-2 pl-8 text-gray-1 py-1 placeholder:text-gray-1 rounded-full w-full",
                    className
                )}
                {...props}
            />
        </div>
    );
};

export default CustomSearchInput;
