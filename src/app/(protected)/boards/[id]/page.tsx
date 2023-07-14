import BoardBottom from "@/components/singleBoardPage/BoardBottom";
import BoardTop from "@/components/singleBoardPage/BoardTop";

const SingleBoardPage = () => {
    return (
        <section
            title="single Board"
            className="px-4 pt-6 flex-1 flex flex-col gap-5 overflow-x-hidden"
        >
            <BoardTop />
            <BoardBottom />
        </section>
    );
};

export default SingleBoardPage;
