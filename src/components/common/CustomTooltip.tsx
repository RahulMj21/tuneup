import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/Tooltip";
import { ReactNode } from "react";

interface Props {
    trigger: ReactNode;
    content: ReactNode;
}

const CustomTooltip = ({ trigger, content }: Props) => {
    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>{trigger}</TooltipTrigger>
                <TooltipContent className="w-[90%] max-w-[25rem]">
                    {content}
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default CustomTooltip;
