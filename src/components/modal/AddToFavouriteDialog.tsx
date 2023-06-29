"use client";

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/Dialog";
import { IconButton } from "@/components/ui/IconButton";
import { Star } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { useState } from "react";

const AddToFavouriteDialog = () => {
    const [open, setOpen] = useState(false);

    const onClose = () => setOpen(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <IconButton>
                    <Star className="h-5 w-5" />
                </IconButton>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader className="gap-1">
                    <DialogTitle>Add To Favourites</DialogTitle>
                    <DialogDescription>
                        By clicking on the confirm button it will be added in
                        your favourite list, if you are not sure click on the
                        close button.
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

export default AddToFavouriteDialog;
