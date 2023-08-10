"use client";

import { DrawerContent, DrawerTrigger } from "@/components/ui/Drawer";
import { IconButton } from "@/components/ui/IconButton";
import { Play } from "lucide-react";
import { useState } from "react";
import UserAvatar from "../common/UserAvatar";

const ClockInDrawer = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <DrawerTrigger asChild onClick={onOpen}>
                <div className="relative h-[2.188rem] w-[2.188rem]">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-light-green-1 opacity-75" />
                    <IconButton className="bg-light-green-1 hover:bg-light-green-2 active:bg-light-green-3 h-full w-full">
                        <Play className="fill-white h-4 w-4 stroke-white translate-x-[2px]" />
                    </IconButton>
                </div>
            </DrawerTrigger>
            <DrawerContent {...{ open, onClose }}>
                <h3 className="px-4 pt-1 pb-7 border-b border-gray-5 tracking-wide">
                    Confirm Clock In
                </h3>
                <div className="py-7 px-4 flex items-center gap-6 border-b border-gray-5">
                    <UserAvatar
                        src="https://github.com/RahulMj21.png"
                        fallback="RM"
                        className="h-24 w-24"
                    />
                    <div className="flex flex-col gap-1">
                        <h5 className="mb-1 tracking-wide">Rahul Mondal</h5>
                        <p className="text-[0.78rem] ">
                            Clocking from GMT +5:30
                        </p>
                        <p className="text-[0.78rem] ">Last out 11 days ago</p>
                        <p className="text-[0.78rem] ">Split time 12:00 am</p>
                    </div>
                </div>
            </DrawerContent>
        </>
    );
};

export default ClockInDrawer;
