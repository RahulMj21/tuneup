import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";

const TAB_ITEMS = [
    { key: "clockIn", value: "Clock In" },
    { key: "addHours", value: "Add Hours" },
];

const ClockInTabs = () => {
    return (
        <Tabs defaultValue="clockIn" className="w-full px-4">
            <TabsList className="w-full h-16">
                {TAB_ITEMS.map(({ key, value }) => (
                    <TabsTrigger key={key} value={key} className="flex-1">
                        {value}
                    </TabsTrigger>
                ))}
            </TabsList>
            <TabsContent value="clockIn">Please Clock In.</TabsContent>
            <TabsContent value="addHours">Add Hours.</TabsContent>
        </Tabs>
    );
};

export default ClockInTabs;
