import { Button } from "@/components/ui/Button";
import cn from "@/libs/cn";
import { IPlan } from "@/types";
import { HTMLAttributes, forwardRef } from "react";
import { CheckCircle, HelpCircle, XCircle } from "lucide-react";
import CustomTooltip from "@/components/common/CustomTooltip";

interface Props extends HTMLAttributes<HTMLDivElement> {
    isAnnual: boolean;
    plan: IPlan;
    isPopular?: boolean;
}

const Plan = forwardRef<HTMLDivElement, Props>(
    ({ isAnnual, plan, isPopular, className, ...props }, ref) => {
        const { planTitle, tagline, cta, features } = plan;
        return (
            <div
                ref={ref}
                className={cn(
                    "relative flex flex-col gap-5 w-full pb-2 pt-6 rounded-2xl border-[1px] border-gray-3",
                    isPopular &&
                        "border-blue-2 shadow-[0_1px_33px_-15px_#3b9ff6]",
                    className
                )}
                {...props}
            >
                {isPopular && (
                    <div className="absolute bg-gradient-to-r from-blue-1 to-green-2 px-4 py-1 rounded-full left-1/2 top-0 translate-x-[-50%] translate-y-[-50%]">
                        Popular
                    </div>
                )}
                <div className="w-full flex flex-col items-center gap-3 py-5 px-4">
                    <h1 className="text-center tracking-[1px] font-semibold text-[2.2rem]">
                        {planTitle}
                    </h1>
                    <p className="text-center text-[1.125rem]">{tagline}</p>
                    <h1 className="text-center text-[3.9rem] leading-[3.9rem] my-2">
                        $<span className="ml-1">0.0</span>
                    </h1>
                    <p className="text-center">{`per month${
                        isAnnual ? ", billed annually" : ""
                    }`}</p>
                </div>
                <div className="flex flex-col w-full p-5 gap-5">
                    {features.map(({ text, footnote, negative }) => (
                        <p className="flex items-center gap-4" key={text}>
                            {negative ? (
                                <XCircle className="h-5 w-5 text-gray-3" />
                            ) : (
                                <CheckCircle className="text-green-3 h-5 w-5" />
                            )}
                            <span
                                className={cn(
                                    "flex gap-2",
                                    negative && "text-gray-3"
                                )}
                            >
                                {text}
                                {footnote && (
                                    <CustomTooltip
                                        content={<p>{footnote}</p>}
                                        trigger={
                                            <HelpCircle className="h-4 w-4 text-gray-2" />
                                        }
                                    />
                                )}
                            </span>
                        </p>
                    ))}
                </div>
                <div className="w-full py-8 px-5 border-t border-gray-3">
                    <Button
                        className={cn(
                            "w-full justify-center text-[1.125rem] font-semibold",
                            isPopular &&
                                "bg-gradient-to-r from-blue-1 to-green-2 text-light-1 shadow-[0_5px_45px_-15px_#3b9ff6] hover:shadow-[0_5px_60px_-15px_#3b9ff6]"
                        )}
                    >
                        {cta}
                    </Button>
                </div>
            </div>
        );
    }
);

Plan.displayName = "Plan";

export default Plan;
