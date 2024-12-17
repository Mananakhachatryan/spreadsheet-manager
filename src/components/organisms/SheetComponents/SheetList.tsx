import { useSpreadsheet } from "../../../context/SpreadsheetContext";
import { Button } from "../../atoms/Button";
import "./sheet.scss";
const SheetsList: React.FC = () => {
  const {
    sheets,
    selectedSheets,
    selectSheet,
    setShowThemeEditor,
    showThemeEditor,
  } = useSpreadsheet();
  return (
    <div className="sheet-list">
      <h3>Spreadsheets</h3>
      {sheets.map((sheet) => (
        <Button
          key={sheet}
          label={sheet}
          onClick={() => selectSheet(sheet)}
          isActive={selectedSheets.includes(sheet)}
        />
      ))}
      <Button
        onClick={() => setShowThemeEditor(true)}
        className={`change-theme ${showThemeEditor && "active"}`}
        label="Change Theme"
      />
    </div>
  );
};

export default SheetsList;
