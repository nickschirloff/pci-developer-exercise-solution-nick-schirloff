import { AgGridReact } from "ag-grid-react";
import React, { useRef } from "react";
import NeoGrid from "../../components/neoGrid/NeoGrid";

const NeoInfoPage = () => {
    const appTitle = "Near-Earth Object Overview";
    document.title = appTitle;

    const gridRef = useRef<AgGridReact>(null);

    const clearFiltersAndSorts = () => {
        gridRef.current?.api.setFilterModel(null);
        gridRef.current?.api.resetColumnState();
    }
    
    return (
        <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
            <div style={{ 
                width: "100%", 
                display: "flex", 
                alignItems: "center", 
                gap: "15px" }}
            >
                <h1>{appTitle}</h1>
                <button onClick={clearFiltersAndSorts}>Clear Filters and Sorters</button>
            </div>
            <NeoGrid gridRef={gridRef} />
        </div>
    );
};

export default NeoInfoPage;