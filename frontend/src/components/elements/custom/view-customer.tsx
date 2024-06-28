import { useState, useEffect } from "react";
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
import { Label } from "../../ui/label";
import { Input } from "../../ui/input";
import { Customer } from "../../../services/store/types";
import { beautifyDate } from "../../../services/helpers/date";
import useCustomerStore from "../../../services/store";
import { TrashIcon } from "lucide-react";

interface CustomerViewDialogProps {
    customerId: number;
}

export function CustomerViewDialog({ customerId }: CustomerViewDialogProps) {
    const customerStore = useCustomerStore();

    const [customer, setCustomer] = useState<Customer | null>(null);
    const [newInterest, setNewInterest] = useState({
        interest: "",
        description: "",
    });
    const [newContact, setNewContact] = useState({ contactDate: "", note: "" });
    const [newRemark, setNewRemark] = useState({ content: "" });
    const [hoveredId, setHoveredId] = useState<number | null>(null); // New state for managing hover status

    const fetchCustomerData = async () => {
        const data = await customerStore.actions.customer.fetchById(customerId);
        if (data) {
            setCustomer(data);
        }
    };

    useEffect(() => {
        fetchCustomerData();
    }, [customerId]);

    const handleSaveInterest = async () => {
        await customerStore.actions.interest.create(customerId, {
            interest: newInterest.interest,
            description: newInterest.description,
        });
        setNewInterest({ interest: "", description: "" });
        fetchCustomerData();
    };

    const handleSaveContact = async () => {
        await customerStore.actions.contact.create(customerId, {
            contactDate: new Date(newContact.contactDate).toISOString(),
            note: newContact.note,
        });
        setNewContact({ contactDate: "", note: "" });
        fetchCustomerData();
    };

    const handleSaveRemark = async () => {
        await customerStore.actions.remark.create(customerId, {
            content: newRemark.content,
            createdAt: new Date().toISOString(),
        });
        setNewRemark({ content: "" });
        fetchCustomerData();
    };

    const handleDeleteInterest = async (id: number) => {
        await customerStore.actions.interest.remove(id);
        fetchCustomerData();
    };

    const handleDeleteContact = async (id: number) => {
        await customerStore.actions.contact.remove(id);
        fetchCustomerData();
    };

    const handleDeleteRemark = async (id: number) => {
        await customerStore.actions.remark.remove(id);
        fetchCustomerData();
    };

    if (!customer) {
        return null;
    }

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">View Customer</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[800px]">
                <DialogHeader>
                    <DialogTitle>Profile Details</DialogTitle>
                    <DialogDescription>
                        View the details of your profile here.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Company Name</Label>
                        <div className="col-span-3">{customer.companyName}</div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Phone</Label>
                        <div className="col-span-3">
                            {customer.phone || "N/A"}
                        </div>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label className="text-right">Email</Label>
                        <div className="col-span-3">{customer.email}</div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        <div>
                            <h3 className="font-semibold">Interests</h3>
                            <div className="space-y-2">
                                {customer.interests.map((interest) => (
                                    <div
                                        key={interest.id}
                                        className="border p-2 rounded relative"
                                        onMouseEnter={() =>
                                            setHoveredId(interest.id)
                                        }
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        <strong>{interest.interest}</strong>:{" "}
                                        {interest.description || "N/A"}
                                        {hoveredId === interest.id && (
                                            <TrashIcon
                                                className="w-5 h-5 text-red-500 absolute top-2 right-2 cursor-pointer"
                                                onClick={() =>
                                                    handleDeleteInterest(
                                                        interest.id
                                                    )
                                                }
                                            />
                                        )}
                                    </div>
                                ))}
                                <div className="border p-2 rounded space-y-2">
                                    <Label htmlFor="interest">Interest</Label>
                                    <Input
                                        id="interest"
                                        value={newInterest.interest}
                                        onChange={(e) =>
                                            setNewInterest({
                                                ...newInterest,
                                                interest: e.target.value,
                                            })
                                        }
                                    />
                                    <Label htmlFor="description">
                                        Description
                                    </Label>
                                    <Input
                                        id="description"
                                        value={newInterest.description}
                                        onChange={(e) =>
                                            setNewInterest({
                                                ...newInterest,
                                                description: e.target.value,
                                            })
                                        }
                                    />
                                    <Button
                                        variant="outline"
                                        className="w-full mt-2"
                                        onClick={handleSaveInterest}
                                    >
                                        Save Interest
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <h3 className="font-semibold">Contacts</h3>
                            <div className="space-y-2">
                                {customer.contacts.map((contact) => (
                                    <div
                                        key={contact.id}
                                        className="border p-2 rounded relative"
                                        onMouseEnter={() =>
                                            setHoveredId(contact.id)
                                        }
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        {new Date(
                                            contact.contactDate
                                        ).toLocaleDateString()}{" "}
                                        - {contact.note || "No notes"}
                                        {hoveredId === contact.id && (
                                            <TrashIcon
                                                className="w-5 h-5 text-red-500 absolute top-2 right-2 cursor-pointer"
                                                onClick={() =>
                                                    handleDeleteContact(
                                                        contact.id
                                                    )
                                                }
                                            />
                                        )}
                                    </div>
                                ))}
                                <div className="border p-2 rounded space-y-2">
                                    <Label htmlFor="contactDate">
                                        Contact Date
                                    </Label>
                                    <Input
                                        id="contactDate"
                                        type="date"
                                        value={newContact.contactDate}
                                        onChange={(e) =>
                                            setNewContact({
                                                ...newContact,
                                                contactDate: e.target.value,
                                            })
                                        }
                                    />
                                    <Label htmlFor="note">Note</Label>
                                    <Input
                                        id="note"
                                        value={newContact.note}
                                        onChange={(e) =>
                                            setNewContact({
                                                ...newContact,
                                                note: e.target.value,
                                            })
                                        }
                                    />
                                    <Button
                                        variant={"outline"}
                                        className="w-full mt-2"
                                        onClick={handleSaveContact}
                                    >
                                        Save Contact
                                    </Button>
                                </div>
                            </div>
                            <h3 className="font-semibold mt-4">Remarks</h3>
                            <div className="space-y-2">
                                {customer.remarks.map((remark) => (
                                    <div
                                        key={remark.id}
                                        className="border p-2 rounded relative"
                                        onMouseEnter={() =>
                                            setHoveredId(remark.id)
                                        }
                                        onMouseLeave={() => setHoveredId(null)}
                                    >
                                        {beautifyDate(remark.createdAt)} -{" "}
                                        {remark.content}
                                        {hoveredId === remark.id && (
                                            <TrashIcon
                                                className="w-5 h-5 text-red-500 absolute top-2 right-2 cursor-pointer"
                                                onClick={() =>
                                                    handleDeleteRemark(
                                                        remark.id
                                                    )
                                                }
                                            />
                                        )}
                                    </div>
                                ))}
                                <div className="border p-2 rounded space-y-2">
                                    <Label htmlFor="content">Content</Label>
                                    <Input
                                        id="content"
                                        value={newRemark.content}
                                        onChange={(e) =>
                                            setNewRemark({
                                                ...newRemark,
                                                content: e.target.value,
                                            })
                                        }
                                    />
                                    <Button
                                        variant="outline"
                                        className="w-full mt-2"
                                        onClick={handleSaveRemark}
                                    >
                                        Save Remark
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline">Close</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
