import { useStateContext } from '../contexts/ContextProvider';

type ButtonProps = {
  color: string;
  bgColor?: string;
  text?: string;
  borderRadius: string;
  icon?: JSX.Element;
  size?: string;
  bgHoverColor?: string;
  width?: string;
};

const Button: React.FC<ButtonProps> = ({
  icon,
  bgColor,
  color,
  bgHoverColor,
  size,
  text,
  borderRadius,
  width,
}) => {
  const { setIsClicked, initialState } = useStateContext();

  return (
    <button
      type='button'
      onClick={() => setIsClicked(initialState)}
      style={{ backgroundColor: bgColor, color, borderRadius }}
      className={` text-${size} p-3 w-${width} hover:drop-shadow-xl hover:bg-${bgHoverColor}`}
    >
      {icon} {text}
    </button>
  );
};

export default Button;
