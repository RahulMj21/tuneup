import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion";
import { ChevronRight } from "lucide-react";

interface Props {
    items: { title: string }[];
}

const BoardItemGroupAccordion = ({ items }: Props) => {
    const titles = items.map((item) => item.title);

    return (
        <Accordion type="multiple" defaultValue={titles}>
            {items.map(({ title }) => (
                <AccordionItem key={title} value={title} data-state="open">
                    <AccordionTrigger className="text-[1rem] text-gray-1 py-2 gap-2 justify-start tracking-wide">
                        <ChevronRight className="h-[1.12rem] w-[1.12rem] transition-all" />
                        {title}
                    </AccordionTrigger>
                    <AccordionContent>
                        <div className="flex flex-col text-gray-1 pl-2 gap-2">
                            <p>1. First Board</p>
                            <p>2. Second Board</p>
                            <p>3. Third Board</p>
                            <p>4. Fourth Board</p>
                            <p>5. Fifth Board</p>
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    );
};

export default BoardItemGroupAccordion;
