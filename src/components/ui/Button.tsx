import { forwardRef } from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import cn from "@/libs/cn";

const buttonVariants = cva(
    "flex items-center gap-2 transform duration-200 rounded-full font-medium border-2 border-transparent whitespace-nowrap hover:shadow-lg active:scale-[0.97] group cursor-pointer",
    {
        variants: {
            variant: {
                default: "bg-light-2 text-dark-1",
                outline:
                    "bg-transparent text-light-2 border-current border-[1.5px] border-opacity-50",
                outline2:
                    "bg-transparent border-gray-2 rounded-md border-[1.5px] border-opacity-50",
                link: "underline-offset-4 hover:underline text-primary",
                text: "rounded-md active:scale-1",
            },
            size: {
                default: "px-4 py-2",
                medium: "px-4 py-1.5",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
