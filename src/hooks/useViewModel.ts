import { useRef } from "react";

export const useViewModel = (VmConstructor, args) => {
    let vmRef = useRef(null)
    if (!vmRef.current) {
        vmRef.current = new VmConstructor(args);
    }

    return vmRef;
}