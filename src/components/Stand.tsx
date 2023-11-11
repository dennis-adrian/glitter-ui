import { CSSProperties } from 'react';

type Props = {
  standNumber: number;
  label: string;
  left: number;
  top: number;
  isHorizontal: boolean;
  isAvailable: boolean;
};
const Stand = ({
  isHorizontal,
  isAvailable,
  label,
  left,
  top,
  standNumber,
}: Props) => {
  const handleSeatClick = (standNumber: number) => {
    console.log(`Seat number ${standNumber} clicked`);
  };

  const style: CSSProperties = {
    position: 'absolute',
    left: `${left}%`,
    top: `${top}%`,
    cursor: 'pointer',
  };

  const bgColor = isAvailable
    ? 'hover:bg-amber-300 hover:bg-opacity-60'
    : 'bg-emerald-200 hover:bg-emerald-400 hover:bg-opacity-60';
  const shape = isHorizontal ? '' : 'rotate-[270deg]';

  return (
    <div
      className={`${bgColor} ${shape} bg-opacity-60 w-14 h-6`}
      key={standNumber}
      style={style}
      onClick={() => handleSeatClick(standNumber)}
    >
      {label}
    </div>
  );
};

export default Stand;
