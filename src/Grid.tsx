import { AgGridReact } from "ag-grid-react";
import { ColDef, IFilterOptionDef } from "ag-grid-community";
import data from "./near-earth-asteroids.json";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";

const convertStringToNumber = (value: string) => {
  return Number(value);
}

const compareNumericStrings = (valA: string, valB: string) => {
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

const numericStringColumnFilter: IFilterOptionDef[] = [
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

const addLeadingZeroes = (value: number): string => {
  return value < 10 ? "0" + value : value.toString();
}

const formatDateValue = (unixDate: string): string => {
  const date = new Date(unixDate);
  const year = date.getFullYear();
  const month = addLeadingZeroes(date.getMonth() + 1);
  const day = addLeadingZeroes(date.getDate());
  return `${year}-${month}-${day}`;
}

const formatHazardousColumn = (defaultValue: string) => {
  switch(defaultValue.toLowerCase()) {
    case "y":
      return "Yes";
    case "n":
      return "No";
    default:
      return "";
  }
}

const columnDefs: ColDef[] = [
  { field: "designation", headerName: "Designation", filter: "agTextColumnFilter" },
  { field: "discovery_date", headerName: "Discovery Date", filter: "agSetColumnFilter", valueGetter: date => formatDateValue(date.data.discovery_date) },
  { field: "h_mag", headerName: "H (mag)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "moid_au", headerName: "MOID (au)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "q_au_1", headerName: "q (au)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "q_au_2", headerName: "Q (au)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "period_yr", headerName: "Period (yr)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "i_deg", headerName: "Inclination (deg)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "pha", headerName: "Potentially Hazardous", filter: "agTextColumnFilter", valueGetter: value => formatHazardousColumn(value.data.pha), },
  { field: "orbit_class", headerName: "Orbit Class", enableRowGroup: true, filter: "agTextColumnFilter" },
];
const NeoGrid = (): JSX.Element => {
  const appTitle = "Near-Earth Object Overview";
  document.title = appTitle;
  
  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      <h1>{appTitle}</h1>
      <AgGridReact
        rowData={data}
        columnDefs={columnDefs}
        rowGroupPanelShow={'always'}
      />
    </div>
  );
};

export default NeoGrid;
