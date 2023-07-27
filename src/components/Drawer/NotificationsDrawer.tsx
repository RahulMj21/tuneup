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
                    <IconButton className="text-gray-2 hover:text-light-2">
                        <Bell className="h-5 w-5" />
                    </IconButton>
                    <NotificationNumber
                        count={5}
                        className="absolute -top-[1.5px] right-[1px] h-[1.125rem] w-[1.125rem] pointer-events-none"
                    />
                </div>
            </DrawerTrigger>
            <DrawerContent {...{ open, onClose }}>
                <h4>Notifications</h4>
            </DrawerContent>
        </>
    );
};

export default NotificationsDrawer;
