import { useSpreadsheet } from "../../../context/SpreadsheetContext";
import { useMemo } from "react";
import SheetItem from "./SheetItem";

const SheetView: React.FC = () => {
  const { spreadsheetData, selectedSheets } = useSpreadsheet();

  const sheetsData = useMemo(() => {
    return selectedSheets.map((label) => ({
      label,
      items: spreadsheetData[label],
    }));
  }, [spreadsheetData, selectedSheets]);

  if (!sheetsData.length) return <div>No spreadsheet selected</div>;

  return (
    <div>
      {sheetsData.map((sheet) => (
        <SheetItem key={sheet.label} {...sheet} />
      ))}
    </div>
  );
};

export default SheetView;
