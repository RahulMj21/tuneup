import cn from "@/libs/cn";
import { Search } from "lucide-react";
import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    className?: string;
}

const CustomSearchInput = ({ className, ...props }: Props) => {
    return (
        <div className="relative">
            <Search className="h-[1.1rem] w-[1.1rem] absolute pointer-events-none text-gray-1 translate-x-3 translate-y-[0.42rem]" />
            <input
                className={cn(
                    "bg-gradient-to-r from-dark-3 to-dark-2 pl-[2.375rem] text-gray-1 py-1 placeholder:text-gray-1 rounded-full w-full",
                    className
                )}
                placeholder="Search..."
                {...props}
            />
        </div>
    );
};

export default CustomSearchInput;
