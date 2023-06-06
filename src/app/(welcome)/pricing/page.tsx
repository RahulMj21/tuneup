import Plans from "./Plans";

const PricingPage = () => {
    return (
        <main
            title="pricing"
            className="custom-container flex w-full flex-col items-center py-8 gap-5"
        >
            <h1 className="leading-[2.2rem] sm:leading-[3.7rem] text-center sm:text-[3rem] font-semibold tracking-[0.5px] whitespace-pre-wrap">
                Simple,
                <span className="ml-3 text-transparent bg-clip-text bg-gradient-to-r from-blue-2 to-green-2">
                    affordable
                </span>
                <br />
                pricing.
            </h1>
            <Plans />
        </main>
    );
};

export default PricingPage;
