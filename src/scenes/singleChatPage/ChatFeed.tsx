import ChatMessage from "@/scenes/singleChatPage/ChatMessage";

const ChatFeed = () => {
    return (
        <div className="flex-1 pt-[5.6rem] pb-7 px-6 overflow-y-auto flex flex-col-reverse gap-7">
            <ChatMessage userName="Rahul" message="This is a test message" />
            <ChatMessage userName="Shyam" message="This is a test message" />
            <ChatMessage userName="Rahul" message="This is a test message" />
            <ChatMessage userName="Shyam" message="This is a test message" />
            <ChatMessage userName="Rahul" message="This is a test message" />
            <ChatMessage userName="Shyam" message="Good Morning!" />
            <ChatMessage userName="Rahul" message="Hi" />
            <ChatMessage userName="Shyam" message="Hello" />
        </div>
    );
};

export default ChatFeed;
