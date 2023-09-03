import robot from "@/assets/images/robot.svg";
import Image from "next/image";

const ChatPage = () => {
    return (
        <section
            title="chat"
            className="px-4 py-6 flex-1 flex items-center justify-center"
        >
            <Image
                src={robot.src}
                height={370}
                width={370}
                alt="AI Robot Saying Hello"
                priority={true}
                className="pointer-events-none"
            />
        </section>
    );
};

export default ChatPage;
