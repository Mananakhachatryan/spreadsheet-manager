import ColItem from "../../atoms/ColItem";
import SheetLabel from "./SheetLable";

interface SheetItemProps {
  label: string;
  items: number[][];
}

const SheetItem: React.FC<SheetItemProps> = ({ label, items }) => {
  return (
    <div className="sheet-view">
      <h3>{label}</h3>
      <SheetLabel dataLength={items?.[0].length} />
      {items.map((row, rowIndex) => (
        <div key={rowIndex} className="sheet-row">
          {row.map((value, colIndex) => (
            <ColItem
              rowIndex={rowIndex}
              value={value.toString()}
              key={colIndex}
              type="value"
            />
          ))}
          <ColItem
            type="sum"
            value={row.reduce((sum, val) => sum + val, 0).toString()}
          />
        </div>
      ))}
    </div>
  );
};

export default SheetItem;
