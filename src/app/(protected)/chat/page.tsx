import Robot from "@/assets/images/robot.gif";
import Image from "next/image";

export const runtime = "edge";

const ChatPage = () => {
    return (
        <section
            title="chat"
            className="px-4 py-6 flex-1 flex items-center justify-center"
        >
            <Image
                src={Robot.src}
                height={300}
                width={300}
                alt="AI Robot Saying Hello"
                priority={true}
                className="pointer-events-none"
            />
        </section>
    );
};

export default ChatPage;
