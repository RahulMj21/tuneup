import ClockInDrawer from "@/components/drawer/ClockInDrawer";
import ClockOutDrawer from "@/components/drawer/ClockOutDrawer";
import ProfileDropdown from "@/components/dropdown/ProfileDropdown";
import { IconButton } from "@/components/ui/IconButton";
import { Coffee, MoreVertical } from "lucide-react";

const HoursHeader = () => {
    return (
        <div className="flex items-center gap-4 justify-between">
            <h2 className="tracking-wide">Time Tracker</h2>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                    <ClockInDrawer />
                    <IconButton className="bg-yellow-1 hover:bg-yellow-2 active:bg-yellow-3 h-[2.188rem] w-[2.188rem]">
                        <Coffee className="h-[1.125rem] w-[1.125rem] stroke-white stroke-[2.5px]" />
                    </IconButton>
                    <ClockOutDrawer />
                </div>
                <div className="flex items-center gap-2">
                    <IconButton className="h-[2.188rem] w-[2.188rem]">
                        <MoreVertical className="h-5 w-5" />
                    </IconButton>
                    <ProfileDropdown />
                </div>
            </div>
        </div>
    );
};

export default HoursHeader;
