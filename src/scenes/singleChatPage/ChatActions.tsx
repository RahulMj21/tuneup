"use client";

import { IconButton } from "@/components/ui/IconButton";
import {
    Baseline,
    Plus,
    SendHorizonal,
    SmilePlus,
    Upload,
    Video,
} from "lucide-react";

const ChatActions = () => {
    return (
        <div className="py-1 px-2 flex items-center justify-between">
            <div className="flex items-center gap-1">
                <IconButton className="p-[0.375rem]" variant="outlined">
                    <Plus className="h-4 w-4" />
                </IconButton>
                <IconButton className="p-[0.375rem]">
                    <Baseline className="h-4 w-4" />
                </IconButton>
                <IconButton className="p-[0.375rem]">
                    <SmilePlus className="h-4 w-4" />
                </IconButton>
                <IconButton className="p-[0.375rem]">
                    <Upload className="h-4 w-4" />
                </IconButton>
                <IconButton className="p-[0.375rem]">
                    <Video className="h-4 w-4" />
                </IconButton>
            </div>
            <IconButton className="text-light-3 hover:text-light-1">
                <SendHorizonal className="h-5 w-5" />
            </IconButton>
        </div>
    );
};

export default ChatActions;
