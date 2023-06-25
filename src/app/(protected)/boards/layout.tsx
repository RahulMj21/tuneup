import { ReactNode } from "react";
import BoardsList from "@/components/boardsPage/BoardsList";

interface Props {
    children: ReactNode;
}

const BoardsLayout = ({ children }: Props) => {
    return (
        <div className="flex h-[100vh] w-full">
            <BoardsList />
            {children}
        </div>
    );
};

export default BoardsLayout;
