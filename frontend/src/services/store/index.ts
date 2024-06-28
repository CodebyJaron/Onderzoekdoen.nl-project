import { useState } from "react";
import { getRequest, postRequest, putRequest, deleteRequest } from "../http";
import {
    New,
    State,
    Updatable,
    Customer,
    Remark,
    Interest,
    Contact,
} from "./types";

const useCustomerStore = () => {
    const [customers, setCustomers] = useState<State<Customer>>({});
    const [remarks, setRemarks] = useState<State<Remark>>({});
    const [interests, setInterests] = useState<State<Interest>>({});
    const [contacts, setContacts] = useState<State<Contact>>({});

    const getters = {
        getAllCustomers: () => Object.values(customers),
        getCustomerById: (id: number) => customers[id],
        getRemarkById: (id: number) => remarks[id],
        getInterestById: (id: number) => interests[id],
        getContactById: (id: number) => contacts[id],
    };

    const setters = {
        setAllCustomers: (items: Customer[]) => {
            const newState: State<Customer> = {};
            items.forEach((item) => {
                newState[item.id] = item;
            });
            setCustomers(newState);
        },
        setCustomerById: (item: Customer) => {
            setCustomers((prevState) => ({ ...prevState, [item.id]: item }));
        },
        deleteCustomerById: (id: number) => {
            setCustomers((prevState) => {
                const newState = { ...prevState };
                delete newState[id];
                return newState;
            });
        },
        setRemarkById: (item: Remark) => {
            setRemarks((prevState) => ({ ...prevState, [item.id]: item }));
        },
        deleteRemarkById: (id: number) => {
            setRemarks((prevState) => {
                const newState = { ...prevState };
                delete newState[id];
                return newState;
            });
        },
        setInterestById: (item: Interest) => {
            setInterests((prevState) => ({ ...prevState, [item.id]: item }));
        },
        deleteInterestById: (id: number) => {
            setInterests((prevState) => {
                const newState = { ...prevState };
                delete newState[id];
                return newState;
            });
        },
        setContactById: (item: Contact) => {
            setContacts((prevState) => ({ ...prevState, [item.id]: item }));
        },
        deleteContactById: (id: number) => {
            setContacts((prevState) => {
                const newState = { ...prevState };
                delete newState[id];
                return newState;
            });
        },
    };

    const actions = {
        customer: {
            fetchAll: async () => {
                const { data } = await getRequest("customers");
                if (data) setters.setAllCustomers(data);
            },
            fetchById: async (id: number) => {
                const { data } = await getRequest(`customers/${id}`);
                if (data) {
                    setters.setCustomerById(data);
                    return data;
                }
            },
            create: async (newCustomer: New<Customer>) => {
                const { data } = await postRequest("customers", newCustomer);
                if (data) setters.setCustomerById(data);
            },
            update: async (
                id: number,
                updatedCustomer: Updatable<Customer>
            ) => {
                const { data } = await putRequest(
                    `customers/${id}`,
                    updatedCustomer
                );
                if (data) setters.setCustomerById(data);
            },
            remove: async (id: number) => {
                await deleteRequest(`customers/${id}`);
                setters.deleteCustomerById(id);
            },
        },
        remark: {
            create: async (
                customerId: number,
                newRemark: Omit<New<Remark>, "customerId">
            ) => {
                const { data } = await postRequest(
                    `customers/${customerId}/remarks`,
                    newRemark
                );
                if (data) setters.setRemarkById(data);
            },
            update: async (
                id: number,
                updatedRemark: Omit<Updatable<Remark>, "customerId">
            ) => {
                const { data } = await putRequest(
                    `customers/remarks/${id}`,
                    updatedRemark
                );
                if (data) setters.setRemarkById(data);
            },
            remove: async (id: number) => {
                await deleteRequest(`customers/remarks/${id}`);
                setters.deleteRemarkById(id);
            },
        },
        interest: {
            create: async (
                customerId: number,
                newInterest: Omit<New<Interest>, "customerId">
            ) => {
                const { data } = await postRequest(
                    `customers/${customerId}/interests`,
                    newInterest
                );
                if (data) setters.setInterestById(data);
            },
            update: async (
                id: number,
                updatedInterest: Omit<Updatable<Interest>, "customerId">
            ) => {
                const { data } = await putRequest(
                    `customers/interests/${id}`,
                    updatedInterest
                );
                if (data) setters.setInterestById(data);
            },
            remove: async (id: number) => {
                await deleteRequest(`customers/interests/${id}`);
                setters.deleteInterestById(id);
            },
        },
        contact: {
            create: async (
                customerId: number,
                newContact: Omit<New<Contact>, "customerId">
            ) => {
                const { data } = await postRequest(
                    `customers/${customerId}/contacts`,
                    newContact
                );
                if (data) setters.setContactById(data);
            },
            update: async (
                id: number,
                updatedContact: Omit<Updatable<Contact>, "customerId">
            ) => {
                const { data } = await putRequest(
                    `customers/contacts/${id}`,
                    updatedContact
                );
                if (data) setters.setContactById(data);
            },
            remove: async (id: number) => {
                await deleteRequest(`customers/contacts/${id}`);
                setters.deleteContactById(id);
            },
        },
    };

    return {
        getters,
        setters,
        actions,
    };
};

export default useCustomerStore;
