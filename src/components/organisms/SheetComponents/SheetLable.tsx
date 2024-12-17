import ColItem from "../../atoms/ColItem";

interface SheetLabelProps {
  dataLength: number;
}

const SheetLabel: React.FC<SheetLabelProps> = ({ dataLength }) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const columns = Array.from(
    { length: dataLength },
    (_, i) => alphabet[i] || `Col${i + 1}`
  );

  return (
    <div className="sheet-row">
      {columns.map((letter, index) => (
        <ColItem type="label" key={index} value={letter} />
      ))}
      <ColItem type="sum" value={"SUM"} />
    </div>
  );
};

export default SheetLabel;
