export const formatDateValue = (unixDate: string): string => {
    const date = new Date(unixDate);
    const year = date.getFullYear();
    const month = addLeadingZeroes(date.getMonth() + 1);
    const day = addLeadingZeroes(date.getDate());
    return `${year}-${month}-${day}`;
}

const addLeadingZeroes = (value: number): string => {
    return value < 10 ? "0" + value : value.toString();
}

export const formatHazardousColumn = (defaultValue: string) => {
    switch(defaultValue.toLowerCase()) {
      case "y":
        return "Yes";
      case "n":
        return "No";
      default:
        return "";
    }
}