import HomeLayout from "@/components/layouts/HomeLayout";
import { Button } from "@/components/styled/Button";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <HomeLayout>
            <div className="flex items-center gap-2 p-4">
                <h1 className="text-color-pink-2">Radhe Shyam</h1>
                <Button className="group">
                    Radha Radha
                    <FaArrowRight className="custon-button-svg" />
                </Button>
                <Button variant="hollow">Radha Radha</Button>
            </div>
        </HomeLayout>
    );
};
export default Home;
