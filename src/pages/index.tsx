import { Button } from "@/components/buttons/Button";
import { FaArrowRight } from "react-icons/fa";

const Home = () => {
    return (
        <div>
            <h1 className="text-color-pink-2">Radhe Shyam</h1>
            <Button className="group">
                Radha Radha
                <FaArrowRight className="group-hover:transform group-hover:translate-x-1 transition-all" />
            </Button>
            <Button variant="hollow">Radha Radha</Button>
        </div>
    );
};
export default Home;
