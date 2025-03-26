const convertStringToNumber = (value: string) => {
    return Number(value);
}

export const compareNumericStrings = (valA: string, valB: string) => {
    const convertedValA = convertStringToNumber(valA);
    const convertedValB = convertStringToNumber(valB);

    if (isNaN(convertedValA) && isNaN(convertedValB)) {
        return 0;
    } else if (isNaN(convertedValA)) {
        return 1;
    } else if (isNaN(convertedValB)) {
        return -1;
    }
    return convertedValA - convertedValB;
}