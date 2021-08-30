function sortingArray(arr, arg) {
    if (arg === "asc") {
        return arr.sort((a, b) => a - b);
    } else if(arg === "desc") {
        return arr.sort((a, b) => b - a);
    }
}