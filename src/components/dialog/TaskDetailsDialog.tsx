"use client";

import { Button } from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog";
import { Dispatch, ReactNode, SetStateAction } from "react";

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
    trigger?: ReactNode;
}

const TaskDetailsDialog = ({ open, setOpen, trigger }: Props) => {
    const onClose = () => setOpen(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>{trigger}</DialogTrigger>
            <DialogContent className="w-full max-w-[50rem] sm:w-11/12">
                <DialogHeader className="gap-1">
                    <DialogTitle>Task Title</DialogTitle>
                    <DialogDescription>
                        This is the task description. As you can see it is quite
                        easy to understand
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline2" size="medium" onClick={onClose}>
                        Close
                    </Button>
                    <Button
                        className="rounded-md"
                        size="medium"
                        onClick={onClose}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TaskDetailsDialog;
