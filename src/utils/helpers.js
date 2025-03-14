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
