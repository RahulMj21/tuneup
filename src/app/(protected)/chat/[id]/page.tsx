import ChatFeed from "@/scenes/singleChatPage/ChatFeed";
import ChatHeader from "@/scenes/singleChatPage/ChatHeader";
// import ChatInput from "@/scenes/singleChatPage/ChatInput";

export const runtime = "edge";

const SingleChatPage = () => {
    return (
        <section
            title="chat"
            className="chat-feed flex-1 flex flex-col relative overflow-hidden"
        >
            <ChatHeader />
            <ChatFeed />
            {/* <ChatInput /> */}
        </section>
    );
};

export default SingleChatPage;
