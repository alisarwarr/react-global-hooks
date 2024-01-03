//REACT
import { useState, useCallback } from "react";


export function useDialog() {
    const [open, setOpen] = useState(false);


    const handleOpen = useCallback(() => {
        setOpen(true);
    }, []);

    const handleClose = useCallback(() => {
        setOpen(false);
    }, []);

    const handleToggle = useCallback(() => {
        setOpen((prevState) => !prevState);
    }, []);


    return {
        open,
        handleOpen,
        handleClose,
        handleToggle,
    }
}