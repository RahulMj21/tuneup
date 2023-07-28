"use client";

import cn from "@/libs/cn";
import { Slot } from "@radix-ui/react-slot";
import { X } from "lucide-react";
import { HTMLAttributes, forwardRef } from "react";
import ReactFocusLock from "react-focus-lock";

interface DrawerTriggerProps extends HTMLAttributes<HTMLButtonElement> {
    asChild?: boolean;
}

export const DrawerTrigger = forwardRef<HTMLButtonElement, DrawerTriggerProps>(
    ({ asChild, className, ...props }, ref) => {
        const Comp = asChild ? Slot : "button";
        return (
            <Comp tabIndex={-1} className={className} ref={ref} {...props} />
        );
    }
);

DrawerTrigger.displayName = "DrawerTrigger";

interface DrawerOverlayProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
}

export const DrawerOverlay = ({
    open,
    className,
    ...props
}: DrawerOverlayProps) => {
    return (
        <div
            className={cn(
                "fixed inset-0 z-[998] bg-gray-900/20 backdrop-blur-sm",
                open
                    ? "animate-in fade-in-0 opacity-100"
                    : "animate-out fade-out-0 opacity-0",
                className
            )}
            {...props}
        />
    );
};

interface DrawerContentProps extends HTMLAttributes<HTMLDivElement> {
    open: boolean;
    onClose: () => void;
}

export const DrawerContent = forwardRef<HTMLDivElement, DrawerContentProps>(
    ({ className, children, open, onClose, ...props }, ref) => {
        return (
            <div
                className={cn(
                    "fixed top-0 left-0 w-full h-[100vh] pointer-events-none z-50",
                    open && "pointer-events-auto"
                )}
            >
                <DrawerOverlay open={open} onClick={onClose} />
                <div
                    className={cn(
                        "fixed right-0 top-0 bg-dark-1 transition-transform w-full md:w-[27rem] transform translate-x-full border-l border-dark-2 h-[100vh]",
                        open && "translate-x-0 z-[9998]",
                        className
                    )}
                    ref={ref}
                    {...props}
                >
                    <div className="relative py-6 px-4 z-[9999]">
                        <ReactFocusLock disabled={!open}>
                            <button
                                onClick={onClose}
                                className="p-0 bg-transparent absolute right-4 top-4 rounded-sm opacity-70  transition-opacity hover:opacity-100 focus-visible:opacity-100 cursor-pointer"
                            >
                                <X className="h-4 w-4" />
                                <span className="sr-only">Close</span>
                            </button>
                            {children}
                        </ReactFocusLock>
                    </div>
                </div>
            </div>
        );
    }
);

DrawerContent.displayName = "DrawerContent";
