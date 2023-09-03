import Blob from "@/components/common/Blob";
import LinkButton from "@/components/ui/LinkButton";
import { ArrowRight } from "lucide-react";

const HomePage = () => {
    return (
        <>
            <Blob />
            <section title="Home" className="relative w-full pt-16 pb-8">
                <div className="w-full custom-container gap-8 flex flex-col items-center">
                    <div>
                        <h1 className="hero-heading text-center lg:text-left">
                            TAKE CONTROL
                        </h1>
                        <h1 className="hero-heading text-center lg:text-right">
                            OF YOUR DAY
                        </h1>
                    </div>
                    <p className="text-[1.2rem] text-center">
                        Utilize each day with the best Screen Time software
                        available globally.
                    </p>
                    <LinkButton href="/" className="text-[1.25rem] px-[1.5rem]">
                        Get Started
                        <ArrowRight className="button-svg text-[1.15rem]" />
                    </LinkButton>
                </div>
            </section>
        </>
    );
};

export default HomePage;
