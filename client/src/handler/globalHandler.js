import {useGlobalAuthSync} from "../hooks/useGlobalAuthSync,js";

export function GlobalHandler(){
    useGlobalAuthSync();
    return null;
}