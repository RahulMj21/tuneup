import BoardItemGroupAccordion from "@/components/accordions/BoardItemGroupAccordion";
import CustomSearchInput from "@/components/formControls/CustomSearchInput";

const ACCORDION_ITEMS = [{ title: "FAVOURITES" }, { title: "ALL PROJECTS" }];

const BoardsList = () => {
    return (
        <div className="w-52 border-r border-gray-4 px-2 py-6 flex flex-col gap-8">
            <CustomSearchInput type="text" placeholder="Search..." />
            <BoardItemGroupAccordion items={ACCORDION_ITEMS} />
        </div>
    );
};

export default BoardsList;
