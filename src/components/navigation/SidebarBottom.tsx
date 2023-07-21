import NotificationNumber from "@/components/common/NotificationNumber";
import { IconButton } from "@/components/ui/IconButton";
import { Bell, HelpCircle } from "lucide-react";

const SidebarBottom = () => {
    return (
        <div className="flex flex-col gap-3">
            <div className="relative">
                <IconButton className="text-gray-2 hover:text-light-2">
                    <Bell className="h-5 w-5" />
                </IconButton>
                <NotificationNumber
                    count={5}
                    className="absolute -top-[1.5px] right-[1px] h-[1.125rem] w-[1.125rem] pointer-events-none"
                />
            </div>
            <IconButton className="text-gray-2 hover:text-light-2">
                <HelpCircle className="h-5 w-5" />
            </IconButton>
        </div>
    );
};

export default SidebarBottom;
