import BoardItemGroupAccordion from "@/components/accordions/BoardItemGroupAccordion";
import CustomSearchInput from "@/components/formControls/CustomSearchInput";
import { Accordion } from "@/components/ui/Accordion";

const BoardsList = () => {
    return (
        <div className="w-56 border-r border-gray-5 pt-6 flex flex-col gap-8 overflow-hidden">
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
