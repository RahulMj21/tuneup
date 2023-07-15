import CustomSearchInput from "@/components/formControls/CustomSearchInput";
import { Edit, Group, Pin } from "lucide-react";
import ChatGroup from "@/scenes/chatPage/ChatGroup";

const ChatBar = () => {
    return (
        <div className="w-60 border-r border-gray-5 pt-6 flex flex-col gap-6 overflow-hidden">
            <div className="flex items-center justify-between gap-4 px-3">
                <h3>Messages</h3>
                <Edit className="h-4 w-4 text-light-3" />
            </div>
            <div className="px-2">
                <CustomSearchInput type="text" placeholder="Search..." />
            </div>
            <div className="flex flex-col gap-8 w-full px-3 pb-4 mt-4 overflow-y-auto">
                <ChatGroup
                    title="Pin Chats"
                    startIcon={
                        <Pin className="h-[0.875rem] w-[0.875rem] rotate-12" />
                    }
                />
                <ChatGroup
                    title="Groups & Channels"
                    startIcon={<Group className="h-[0.875rem] w-[0.875rem]" />}
                />
                <ChatGroup title="All Messages" />
            </div>
        </div>
    );
};

export default ChatBar;
