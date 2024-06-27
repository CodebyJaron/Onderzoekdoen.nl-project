import { useState } from "react";
import { getRequest, postRequest, putRequest, deleteRequest } from "../http";
import { New, State, Updatable } from "./types";

const useStoreModule = <T extends { id: number }>(moduleName: string) => {
    const [state, setState] = useState<State<T>>({});

    const getters = {
        all: Object.values(state),
        byId: (id: number) => state[id],
    };

    const setters = {
        setAll: (items: T[]) => {
            const newState: State<T> = {};
            items.forEach((item) => {
                newState[item.id] = item;
            });
            setState(newState);
        },

        setById: (item: T) => {
            setState((prevState) => ({ ...prevState, [item.id]: item }));
        },

        deleteById: (id: number) => {
            setState((prevState) => {
                const newState = { ...prevState };
                delete newState[id];
                return newState;
            });
        },
    };

    const actions = {
        getAll: async () => {
            const { data } = await getRequest(moduleName);
            if (data) setters.setAll(data);
        },
        getById: async (id: number) => {
            const { data } = await getRequest(`${moduleName}/${id}`);
            if (data) setters.setById(data);
        },
        create: async (newItem: New<T>) => {
            const { data } = await postRequest(moduleName, newItem);
            if (data) setters.setById(data);
        },
        update: async (id: number, item: Updatable<T>) => {
            const { data } = await putRequest(`${moduleName}/${id}`, item);
            if (data) setters.setById(data);
        },
        remove: async (id: number) => {
            await deleteRequest(`${moduleName}/${id}`);
            setters.deleteById(id);
        },
    };

    return {
        getters,
        setters,
        actions,
    };
};

export default useStoreModule;
