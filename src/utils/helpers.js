// Array is empty
export function isEmptyArray(arr) {
    return Array?.isArray(arr) && arr?.length === 0;
}

// Array is not empty
export function isNotEmptyArray(arr) {
    return Array?.isArray(arr) && arr?.length > 0;
}

// Object is empty
export function isEmptyObject(obj) {
    return Object?.keys(obj)?.length === 0 && obj?.constructor === Object;
}

// Object is not empty
export function isNotEmptyObject(obj) {
    return Object?.keys(obj)?.length > 0 || obj?.constructor !== Object;
}

// Overflow by props
export function overflowCheck(props) {
    props ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");
}

// Download file
import { success } from "../components/toast/toast";

export function downloadFiles(data, filename) {
    const link = document.createElement('a');
    link.href = URL.createObjectURL(new Blob([data]));
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    success("Ներբեռնումն ավարտված է։")
}

// Download file
export function downloadXmls(data, filename) {
    const url = window.URL.createObjectURL(data);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
    success("Ներբեռնումն ավարտված է։")
}

// Check column include HTML
import { htmlRegex } from "./regex";

export function isHTML(str) {
    return htmlRegex?.test(str)
}

// Check column include HTML
import { urlRegex } from "./regex";

export function isURL(str) {
    return urlRegex?.test(str)
}