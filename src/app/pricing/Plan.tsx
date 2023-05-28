import { Button } from "@/components/ui/Button";
import cn from "@/libs/cn";
import { IPlan } from "@/types";
import { HTMLAttributes, forwardRef } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
    isAnnual: boolean;
    plan: IPlan;
}

const Plan = forwardRef<HTMLDivElement, Props>(
    ({ isAnnual, plan, className, ...props }, ref) => {
        const { planTitle, tagline, cta } = plan;
        return (
            <div
                ref={ref}
                className={cn(
                    "flex flex-col gap-5 w-full py-2 rounded-2xl border-[1px] border-gray-2",
                    className
                )}
                {...props}
            >
                <div className="w-full flex flex-col items-center gap-3 py-5 px-4">
                    <h1 className="text-center tracking-[1px] font-semibold">
                        {planTitle}
                    </h1>
                    <p className="text-center text-[1.125rem]">{tagline}</p>
                    <h1 className="text-center text-[3.7rem] leading-[3.7rem] my-2">
                        $0.0
                    </h1>
                    <p className="text-center">{`per month${
                        isAnnual ? ", billed annually" : ""
                    }`}</p>
                </div>
                <div className="w-full py-8 px-5 border-t border-gray-2">
                    <Button className="w-full justify-center text-[1.125rem] font-semibold">
                        {cta}
                    </Button>
                </div>
            </div>
        );
    }
);

Plan.displayName = "Plan";

export default Plan;
