export interface FormModalData<T = unknown> {
    form: T;
    submitEvent: (edited: T) => Promise<void> | void;
    size: "md" | "lg";
}
