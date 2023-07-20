import BoardItemGroupAccordion from "@/components/accordions/BoardItemGroupAccordion";
import CustomSearchInput from "@/components/formControls/CustomSearchInput";
import { Accordion } from "@/components/ui/Accordion";
import { Edit } from "lucide-react";

const BoardsList = () => {
    return (
        <div className="w-60 border-r border-gray-5 pt-6 flex flex-col gap-6 overflow-hidden">
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
        </div>
    );
};

export default BoardsList;
