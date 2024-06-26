import useStoreModule from "../index";
import { Contact } from "../types";

export const useContactStore = () =>
    useStoreModule<Contact>("customers/contacts");
