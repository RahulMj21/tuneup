import BoardItemGroupAccordion from "@/components/accordions/BoardItemGroupAccordion";
import ResizableSidebar from "@/components/common/ResizableSidebar";
import CustomSearchInput from "@/components/formControls/CustomSearchInput";
import { Accordion } from "@/components/ui/Accordion";
import { Edit } from "lucide-react";

const BoardsList = () => {
    return (
        <ResizableSidebar>
            <div className="flex items-center justify-between gap-4 px-3">
                <h3>Boards</h3>
                <Edit className="h-4 w-4 text-light-3" />
            </div>
            <div className="px-2">
                <CustomSearchInput type="text" placeholder="Search..." />
            </div>
            <div className="px-2 flex flex-col gap-8 overflow-y-auto">
                <Accordion
                    type="multiple"
                    defaultValue={["FAVOURITES", "ALL PROJECTS"]}
                >
                    <BoardItemGroupAccordion title="FAVOURITES" />
                    <BoardItemGroupAccordion title="ALL PROJECTS" />
                </Accordion>
            </div>
        </ResizableSidebar>
    );
};

export default BoardsList;
