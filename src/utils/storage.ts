const storage = window.sessionStorage;

export const setItem = (key: string, value: any) => {
    storage.setItem(key, value);
};

export const getItem = (key: string) => {
    return storage.getItem(key);
};
