import { useState } from "react";
import useCustomerStore from "../../../services/store";
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "../../ui/alert-dialog";
import { Button } from "../../ui/button";

interface CustomerDeleteAlertProps {
    customerId: number;
}

export function CustomerDeleteAlert({ customerId }: CustomerDeleteAlertProps) {
    const [isOpen, setIsOpen] = useState(false);
    const customerStore = useCustomerStore();

    const handleDelete = async () => {
        await customerStore.actions.customer.remove(customerId);
        setIsOpen(false);
    };

    const handleCancel = () => {
        setIsOpen(false);
    };

    const openDialog = () => {
        setIsOpen(true);
    };

    return (
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
            <AlertDialogTrigger asChild>
                <Button variant="outline" onClick={openDialog}>
                    Delete customer
                </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        Are you absolutely sure?
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        This action cannot be undone. This will permanently
                        delete the customer and remove their data from our
                        servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel asChild>
                        <Button variant="ghost" onClick={handleCancel}>
                            Cancel
                        </Button>
                    </AlertDialogCancel>
                    <AlertDialogAction asChild>
                        <Button variant="destructive" onClick={handleDelete}>
                            Delete
                        </Button>
                    </AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    );
}
