import { useEffect, useState } from "react";

/* eslint-disable no-unused-vars */
export const useDebounce = (value: string, delay: number): string => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(value)
        }, delay);
        return () => {
            clearTimeout(handler)
        }
    }, [value, delay]);

    return debouncedValue
};