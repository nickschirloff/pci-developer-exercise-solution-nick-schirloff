import { ColDef } from "ag-grid-community";
import { formatDateValue, formatHazardousColumn } from "./FormatDisplayValue";
import { compareNumericStrings } from "./Comparison";
import { numericStringColumnFilter } from "./NumericStringColumnFilter";

export const neoGridColumns: ColDef[] = [
  { field: "designation", headerName: "Designation", filter: "agTextColumnFilter" },
  { field: "discovery_date", headerName: "Discovery Date", filter: "agSetColumnFilter", valueGetter: date => formatDateValue(date.data.discovery_date) },
  { field: "h_mag", headerName: "H (mag)", filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "moid_au", headerName: "MOID (au)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "q_au_1", headerName: "q (au)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "q_au_2", headerName: "Q (au)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "period_yr", headerName: "Period (yr)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "i_deg", headerName: "Inclination (deg)", comparator: compareNumericStrings, filter: "agNumberColumnFilter", filterParams: { filterOptions: numericStringColumnFilter } },
  { field: "pha", headerName: "Potentially Hazardous", valueGetter: value => formatHazardousColumn(value.data.pha), filter: "agTextColumnFilter" },
  { field: "orbit_class", headerName: "Orbit Class", enableRowGroup: true, filter: "agTextColumnFilter" },
];