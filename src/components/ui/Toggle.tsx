"use client";

import * as React from "react";
import * as TogglePrimitive from "@radix-ui/react-toggle";
import { cva, type VariantProps } from "class-variance-authority";
import cn from "@/libs/cn";

const toggleVariants = cva(
    "flex items-center gap-2 transform duration-200 rounded-full font-medium border-2 border-transparent whitespace-nowrap hover:shadow-lg active:scale-[0.97] group cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-transparent",
                outline:
                    "bg-transparent text-light-2 border-current border-[1.5px] border-opacity-50",
            },
            size: {
                default: "h-10 px-3",
                sm: "h-8 px-2",
                lg: "h-11 px-5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

const Toggle = React.forwardRef<
    React.ElementRef<typeof TogglePrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof TogglePrimitive.Root> &
        VariantProps<typeof toggleVariants>
>(({ className, variant, size, ...props }, ref) => (
    <TogglePrimitive.Root
        ref={ref}
        className={cn(toggleVariants({ variant, size, className }))}
        {...props}
    />
));

Toggle.displayName = TogglePrimitive.Root.displayName;

export { Toggle, toggleVariants };
