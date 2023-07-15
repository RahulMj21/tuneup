import CustomSearchInput from "@/components/formControls/CustomSearchInput";
import { Edit, Group, Pin } from "lucide-react";
import ChatGroup from "@/scenes/chatPage/ChatGroup";

const ChatBar = () => {
    return (
        <div className="w-56 border-r border-gray-5 px-2 py-6 flex flex-col gap-6">
            <div className="flex items-center justify-between gap-4 px-1">
                <h3>Messages</h3>
                <Edit className="h-4 w-4 text-light-3" />
            </div>
            <CustomSearchInput type="text" placeholder="Search..." />
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
    );
};

export default ChatBar;
