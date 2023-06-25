import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import cn from "@/libs/cn";

const buttonVariants = cva(
    "flex items-center cursor-pointer p-2 rounded-full transition-all",
    {
        variants: {
            variant: {
                default: "hover:bg-gray-600/20 active:bg-gray-600/30",
                fill: "bg-light-2 hover:bg-light-3 text-dark-1",
            },
        },
        defaultVariants: {
            variant: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const IconButton = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
IconButton.displayName = "IconButton";

export { IconButton, buttonVariants };
