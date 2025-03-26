import { IFilterOptionDef } from "ag-grid-community";

export const numericStringColumnFilter: IFilterOptionDef[] = [
    {
        displayKey: "lessThanWithNulls",
        displayName: "Less Than",
        predicate: ([filterValue], cellValue) => Number(cellValue) === undefined || Number(cellValue) < Number(filterValue)
    },
    {
        displayKey: "greaterThanWithNulls",
        displayName: "Greater Than",
        predicate: ([filterValue], cellValue) => Number(cellValue) === undefined || Number(cellValue) > Number(filterValue)
    },
    {
        displayKey: "doesNotEqual",
        displayName: "Does Not Equal",
        predicate: ([filterValue], cellValue) => Number(cellValue) !== Number(filterValue)
    },
];