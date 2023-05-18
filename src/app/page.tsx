import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const HomePage = () => {
    return (
        <section title="Home" className="relative w-full pt-16 ">
            <div className="absolute right-0 top-0 -z-40 h-[20vw] w-[20vw] bg-gradient-to-r from-color-blue-1 to-pink-500 blur-[4.5vw] rounded-full" />
            <div className="absolute left-0 bottom-[2rem] -z-40 h-[14vw] w-[14vw] bg-gradient-to-r  from-pink-700 to-color-blue-1 blur-[5.5vw] rounded-full" />
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
                    <FaArrowRight className="custom-button-svg" />
                </Link>
            </div>
        </section>
    );
};

export default HomePage;
