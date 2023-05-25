import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
    return (
        <>
            <section title="Home" className="relative w-full pt-16 ">
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
                    <Link
                        href="/"
                        className="btn group text-[1.25rem]"
                        style={{ paddingInline: "1.5rem" }}
                    >
                        Get Started
                        <FaArrowRight className="text-[1.15rem] custom-button-svg" />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default HomePage;
