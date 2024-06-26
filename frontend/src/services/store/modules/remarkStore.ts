import useStoreModule from "../index";
import { Remark } from "../types";

export const useRemarkStore = () => useStoreModule<Remark>("customers/remarks");
