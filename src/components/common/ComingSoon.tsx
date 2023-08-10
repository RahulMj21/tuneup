import WipIcon from "@/components/icons/WipIcon";

const ComingSoon = () => {
    return (
        <div className="flex items-center flex-col">
            <WipIcon />
            <h1 className="font-bold tracking-wide mb-4">Coming Soon</h1>
            <p className="text-[1.125rem]">
                We are working on this feature and will launch soon! 🚀
            </p>
        </div>
    );
};

export default ComingSoon;
