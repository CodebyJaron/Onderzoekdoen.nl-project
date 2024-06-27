import React, { useState, useEffect } from "react";
import { Button } from "../../ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "../../ui/dialog";
import { Input } from "../../ui/input";
import { Label } from "../../ui/label";
import { Customer } from "../../../services/store/types";

export function CustomerDialog({
    customer,
    onSubmit,
    onCancel,
}: {
    customer?: Customer;
    onSubmit: (customer: Customer) => void;
    onCancel: () => void;
}) {
    const [formState, setFormState] = useState<Customer>({
        id: 0,
        companyName: "",
        phone: "",
        email: "",
        remarks: [],
        interests: [],
        contacts: [],
        ...customer,
    });

    useEffect(() => {
        if (customer) {
            setFormState(customer);
        } else {
            setFormState({
                id: 0,
                companyName: "",
                phone: "",
                email: "",
                remarks: [],
                interests: [],
                contacts: [],
            });
        }
    }, [customer]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormState((prevState) => ({
            ...prevState,
            [id]: value,
        }));
    };

    const handleSubmit = () => {
        onSubmit(formState);
    };

    return (
        <Dialog onOpenChange={onCancel}>
            <DialogTrigger asChild>
                <Button>Create customer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>
                        {customer ? "Edit Customer" : "Create Customer"}
                    </DialogTitle>
                    <DialogDescription>
                        {customer
                            ? "Make changes to the customer profile here. Click save when you're done."
                            : "Fill in the details to create a new customer. Click save when you're done."}
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="companyName" className="text-right">
                            Company Name
                        </Label>
                        <Input
                            id="companyName"
                            value={formState.companyName}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="phone" className="text-right">
                            Phone
                        </Label>
                        <Input
                            id="phone"
                            value={formState.phone}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="email" className="text-right">
                            Email
                        </Label>
                        <Input
                            id="email"
                            value={formState.email}
                            onChange={handleChange}
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="button" onClick={handleSubmit}>
                        Save changes
                    </Button>
                    <Button type="button" variant="ghost" onClick={onCancel}>
                        Cancel
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
