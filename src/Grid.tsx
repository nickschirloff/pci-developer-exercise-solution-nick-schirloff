import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-alpine.css";
import NeoInfoPage from "./pages/neoInfoPage/NeoInfoPage";

const NeoGrid = (): JSX.Element => {

  return (
    <div className="ag-theme-alpine" style={{ height: 900, width: 1920 }}>
      {/* Inserting page here to preserve CSS stylings */}
      <NeoInfoPage />
    </div>
  );
};

export default NeoGrid;