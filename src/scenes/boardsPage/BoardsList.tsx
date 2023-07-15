import BoardItemGroupAccordion from "@/components/accordions/BoardItemGroupAccordion";
import CustomSearchInput from "@/components/formControls/CustomSearchInput";
import { Accordion } from "@/components/ui/Accordion";

const BoardsList = () => {
    return (
        <div className="w-56 border-r border-gray-5 px-2 py-6 flex flex-col gap-8">
            <CustomSearchInput type="text" placeholder="Search..." />
            <Accordion
                type="multiple"
                defaultValue={["FAVOURITES", "ALL PROJECTS"]}
            >
                <BoardItemGroupAccordion title="FAVOURITES" />
                <BoardItemGroupAccordion title="ALL PROJECTS" />
            </Accordion>
        </div>
    );
};

export default BoardsList;
