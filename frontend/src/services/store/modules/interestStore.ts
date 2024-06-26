import useStoreModule from "../index";
import { Interest } from "../types";

export const useInterestStore = () =>
    useStoreModule<Interest>("customers/interests");
