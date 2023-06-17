import BoardsList from "@/components/boardsPage/BoardsList";

export const runtime = "edge";

const BoardsPage = () => {
    return (
        <div className="flex h-[100vh]">
            <BoardsList />
            <section title="boards" className="px-4 py-6">
                <h1>Boards</h1>
            </section>
        </div>
    );
};

export default BoardsPage;
