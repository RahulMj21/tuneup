import HoursHeader from "@/scenes/hours/HoursHeader";

export const runtime = "edge";

const HoursPage = () => {
    return (
        <section title="hours" className="px-4 py-6">
            <HoursHeader />
        </section>
    );
};

export default HoursPage;
