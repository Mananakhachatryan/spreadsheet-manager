import "./atoms.scss";

interface ButtonProps {
  onClick?: () => void;
  label: string;
  isActive?: boolean;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  onClick,
  label,
  isActive,
  className,
}) => (
  <button onClick={onClick} className={`${className} ${isActive && "active"}`}>
    {label}
  </button>
);
