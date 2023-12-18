import BoardBottom from "@/scenes/singleBoardPage/BoardBottom";
import BoardTop from "@/scenes/singleBoardPage/BoardTop";
import { Suspense } from "react";

const SingleBoardPage = () => {
    return (
        <section
            title="single Board"
            className="px-4 pt-6 flex-1 flex flex-col gap-5 overflow-x-hidden"
        >
            <BoardTop />
            <Suspense fallback={<></>}>
                <BoardBottom />
            </Suspense>
        </section>
    );
};

export default SingleBoardPage;
