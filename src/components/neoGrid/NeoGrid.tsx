import { AgGridReact } from "ag-grid-react";
import data from "../../near-earth-asteroids.json";
import React from "react";
import { neoGridColumns } from "../../models";

interface NeoGridProps {
    gridRef: React.RefObject<AgGridReact>;
}

const NeoGrid = ({ gridRef }: NeoGridProps) => {

    return (
        <AgGridReact
            rowData={data}
            columnDefs={neoGridColumns}
            cellSelection
            copyHeadersToClipboard
            ref={gridRef}
        />
    );
};

export default NeoGrid;