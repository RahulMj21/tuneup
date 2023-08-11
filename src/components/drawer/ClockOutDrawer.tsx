"use client";

import { DrawerContent, DrawerTrigger } from "@/components/ui/Drawer";
import { IconButton } from "@/components/ui/IconButton";
import { Square } from "lucide-react";
import { useState } from "react";

const ClockOutDrawer = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <DrawerTrigger asChild onClick={onOpen}>
                <IconButton className="bg-red-1 hover:bg-red-2 active:bg-red-3 h-[2.188rem] w-[2.188rem]">
                    <Square className="fill-white h-4 w-4 stroke-none" />
                </IconButton>
            </DrawerTrigger>
            <DrawerContent {...{ open, onClose }}>
                <h4 className="px-4">Confirm Clock Out</h4>
            </DrawerContent>
        </>
    );
};

export default ClockOutDrawer;
