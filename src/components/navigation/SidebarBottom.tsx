import NotificationsDrawer from "@/components//Drawer/NotificationsDrawer";
import { IconButton } from "@/components/ui/IconButton";
import { HelpCircle } from "lucide-react";

const SidebarBottom = () => {
    return (
        <div className="flex flex-col gap-3">
            <NotificationsDrawer />
            <IconButton className="text-gray-2 hover:text-light-2">
                <HelpCircle className="h-5 w-5" />
            </IconButton>
        </div>
    );
};

export default SidebarBottom;
