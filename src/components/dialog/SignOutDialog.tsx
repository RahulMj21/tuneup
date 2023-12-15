"use client";

import { Button } from "@/components/ui/Button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/Dialog";
import { useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";

interface Props {
    open: boolean;
    setOpen: Dispatch<SetStateAction<boolean>>;
}

const SignOutDialog = ({ open, setOpen }: Props) => {
    const [isLoading] = useState(false);
    const router = useRouter();

    const onClose = () => setOpen(false);

    const handleSignOut = () => {
        router.push("/");
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogContent>
                <DialogHeader className="gap-1">
                    <DialogTitle>Sign Out</DialogTitle>
                    <DialogDescription>
                        By clicking the confirm button you will be Signed Out.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button
                        variant="outline2"
                        size="medium"
                        onClick={onClose}
                        disabled={isLoading}
                    >
                        Cancel
                    </Button>
                    <Button
                        className="rounded-md"
                        size="medium"
                        onClick={handleSignOut}
                        isLoading={isLoading}
                    >
                        Confirm
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default SignOutDialog;
