import { useState } from "react";
import { getRequest, postRequest, putRequest, deleteRequest } from "../http";
import { New, State, Updatable } from "./types";

const useStoreModule = <T extends { id: number }>(moduleName: string) => {
    const [state, setState] = useState<State<T>>({});

    const setAll = (items: T[]) => {
        const newState: State<T> = {};
        items.forEach((item) => {
            newState[item.id] = item;
        });
        setState(newState);
    };

    const setById = (item: T) => {
        setState((prevState) => ({ ...prevState, [item.id]: item }));
    };

    const deleteById = (id: number) => {
        setState((prevState) => {
            const newState = { ...prevState };
            delete newState[id];
            return newState;
        });
    };

    const getAll = async () => {
        const { data } = await getRequest(moduleName);
        if (data) setAll(data);
    };

    const getById = async (id: number) => {
        const { data } = await getRequest(`${moduleName}/${id}`);
        if (data) setById(data);
    };

    const create = async (newItem: New<T>) => {
        const { data } = await postRequest(moduleName, newItem);
        if (data) setById(data);
    };

    const update = async (id: number, item: Updatable<T>) => {
        const { data } = await putRequest(`${moduleName}/${id}`, item);
        if (data) setById(data);
    };

    const remove = async (id: number) => {
        await deleteRequest(`${moduleName}/${id}`);
        deleteById(id);
    };

    return {
        state,
        actions: {
            getAll,
            getById,
            create,
            update,
            remove,
        },
    };
};

export default useStoreModule;
