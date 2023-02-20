import React, { useEffect, useState, useMemo } from 'react';

export default function useLocalStorage<T>(
    key: string,
    initialState?: T | (() => T)
): [T, React.Dispatch<React.SetStateAction<T>>] {
    const [value, setValue] = useState(initialState as T);
    useEffect(() => {
        const stored = localStorage.getItem(key);
        if (stored) {
            setValue(parse(stored));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
}

const parse = (value: string) => {
    try {
        return JSON.parse(value);
    } catch {
        return value;
    }
}