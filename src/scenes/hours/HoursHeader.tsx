import ProfileDropdown from "@/components/dropdown/ProfileDropdown";
import { IconButton } from "@/components/ui/IconButton";
import { Coffee, MoreVertical, Play, Square } from "lucide-react";

const HoursHeader = () => {
    return (
        <div className="flex items-center gap-4 justify-between">
            <h2 className="tracking-wide">Time Tracker</h2>
            <div className="flex items-center gap-5">
                <div className="flex items-center gap-3">
                    <div className="relative h-[2.188rem] w-[2.188rem]">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-light-green-1 opacity-75"></span>
                        <IconButton className="bg-light-green-1 hover:bg-light-green-2 active:bg-light-green-3 h-full w-full">
                            <Play className="fill-white h-4 w-4 stroke-white translate-x-[2px]" />
                        </IconButton>
                    </div>
                    <IconButton className="bg-yellow-1 hover:bg-yellow-2 active:bg-yellow-3 h-[2.188rem] w-[2.188rem]">
                        <Coffee className="h-[1.125rem] w-[1.125rem] stroke-white stroke-[2.5px]" />
                    </IconButton>
                    <IconButton className="bg-red-1 hover:bg-red-2 active:bg-red-3 h-[2.188rem] w-[2.188rem]">
                        <Square className="fill-white h-4 w-4 stroke-none" />
                    </IconButton>
                </div>
                <div className="flex items-center gap-2">
                    <IconButton className="h-[2.188rem] w-[2.188rem]">
                        <MoreVertical className="h-5 w-5" />
                    </IconButton>
                    <ProfileDropdown className="h-10 w-10" />
                </div>
            </div>
        </div>
    );
};

export default HoursHeader;
