import useStoreModule from "..";
import { Customer } from "../types";

export const useCustomerStore = () => useStoreModule<Customer>("customers");
