"use client";

import NotificationNumber from "@/components/common/NotificationNumber";
import { DrawerContent, DrawerTrigger } from "@/components/ui/Drawer";
import { IconButton } from "@/components/ui/IconButton";
import { Bell } from "lucide-react";
import { useState } from "react";

const NotificationsDrawer = () => {
    const [open, setOpen] = useState(false);

    const onOpen = () => setOpen(true);
    const onClose = () => setOpen(false);

    return (
        <>
            <DrawerTrigger asChild onClick={onOpen}>
                <div className="relative">
                    <IconButton
                        aria-label="Notifications"
                        className="text-gray-2 hover:text-light-2"
                    >
                        <Bell className="h-5 w-5" />
                    </IconButton>
                    <NotificationNumber
                        count={5}
                        className="absolute -top-[1.5px] right-[1px] h-[1.125rem] w-[1.125rem] pointer-events-none"
                    />
                </div>
            </DrawerTrigger>
            <DrawerContent {...{ open, onClose }}>
                <h3 className="px-4 pt-1 pb-7 tracking-wide">Notifications</h3>
            </DrawerContent>
        </>
    );
};

export default NotificationsDrawer;
