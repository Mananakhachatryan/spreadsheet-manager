import { useSpreadsheet } from "../../context/SpreadsheetContext";
import "./atoms.scss";

interface ColItemProps {
  value: string;
  type?: string;
  rowIndex?: number;
}

const ColItem: React.FC<ColItemProps> = ({ value, type, rowIndex = 0 }) => {
  const { themeValues } = useSpreadsheet();

  if (type === "value") {
    const rowEven = (rowIndex + 1) % 2 === 0;
    const cellEven = +value % 2 === 0;
    const rowStyles = rowEven ? themeValues.evenRows : themeValues.oddRows;

    const cellStyles = cellEven
      ? themeValues.evenCellValues
      : themeValues.oddCellValues;

    const finalStyles = {
      backgroundColor: cellStyles.backgroundColor || rowStyles.backgroundColor,
      color: cellStyles.color || rowStyles.color,
    };

    return (
      <div className="col-item" style={finalStyles}>
        {value}
      </div>
    );
  }

  return <div className={`col-item ${type === "sum" && "sum"}`}>{value}</div>;
};

export default ColItem;
