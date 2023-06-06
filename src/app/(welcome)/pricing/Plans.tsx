"use client";

import Switch from "@/components/ui/Switch";
import { PLAN_ITEMS } from "@/utils/constants";
import { useState } from "react";
import Confetti from "react-dom-confetti";
import Plan from "./Plan";

const Plans = () => {
    const [isAnnual, setIsAnnual] = useState(false);

    return (
        <>
            <div className="flex items-center">
                <p className="whitespace-nowrap pr-3">Billed Monthly</p>
                <Confetti
                    active={isAnnual}
                    config={{
                        elementCount: 200,
                        spread: 90,
                        colors: [
                            "#a864fd",
                            "#29cdff",
                            "#44ff82",
                            "#ff718d",
                            "#f3cf41",
                        ],
                    }}
                />
                <Switch
                    checked={isAnnual}
                    onCheckedChange={(e) => setIsAnnual(e)}
                    className="z-50"
                />
                <p className="whitespace-nowrap pl-3">Billed Annually</p>
            </div>
            <div className="grid grid-cols-plan gap-10 my-8 w-full">
                {PLAN_ITEMS.map((plan) => (
                    <Plan
                        key={plan.planTitle}
                        {...{
                            isAnnual,
                            plan,
                            isPopular: plan.planTitle === "Pro",
                        }}
                    />
                ))}
            </div>
        </>
    );
};

export default Plans;
