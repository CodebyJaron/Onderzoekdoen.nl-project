import useStoreModule from "../index";
import { Customer } from "../types";

export const useCustomerStore = () => useStoreModule<Customer>("customers");
