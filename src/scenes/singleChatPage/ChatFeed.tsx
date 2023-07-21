import ChatMessage from "@/scenes/singleChatPage/ChatMessage";

const ChatFeed = () => {
    return (
        <div className="flex-1 pt-[5.6rem] pb-7 px-6 overflow-y-auto flex flex-col-reverse gap-7">
            <ChatMessage
                userName="Shyam"
                message="Radha Radha Shyam Shyam ❣️"
            />
            <ChatMessage
                userName="Radhe"
                message="Radha Radha Shyam Shyam ❣️"
            />
            <ChatMessage
                userName="Shyam"
                message="Radha Radha Shyam Shyam ❣️"
            />
            <ChatMessage
                userName="Radhe"
                message="Radha Radha Shyam Shyam ❣️"
            />
            <ChatMessage
                userName="Shyam"
                message="Radha Radha Shyam Shyam ❣️"
            />
            <ChatMessage userName="Radhe" message="Good Morning!" />
            <ChatMessage userName="Shyam" message="Hi" />
            <ChatMessage userName="Radhe" message="Hello" />
        </div>
    );
};

export default ChatFeed;
