export interface Customer {
    id: number;
    companyName: string;
    phone?: string;
    email: string;
    remarks: Remark[];
    interests: Interest[];
    contacts: Contact[];
}

export interface Remark {
    id: number;
    content: string;
    createdAt: string;
    customerId: number;
}

export interface Interest {
    id: number;
    interest: string;
    description?: string;
    customerId: number;
}

export interface Contact {
    id: number;
    contactDate: string;
    note?: string;
    customerId: number;
}

export type New<T> = Omit<T, "id">;

export type Updatable<T> = Partial<T>;

export interface State<T> {
    [key: number]: T;
}
