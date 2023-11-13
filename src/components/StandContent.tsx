import { useState } from 'react';

type Props = {
  label: string
  standNumber: number;
  status: string;
};

const StandContent = ({ label, standNumber, status }: Props) => {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  return (
    <div
      className="w-full h-full z-20 absolute inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
      onTouchStart={showTooltip}
      onTouchEnd={hideTooltip}
    >
      {tooltipVisible && (
        <div className="bg-accent p-2 absolute rounded-md shadow-md left-12">
          <h1 className="capitalize text-center font-bold">Stand {label}{standNumber}</h1>
          <h2>{status}</h2>
        </div>
      )}
    </div>
  );
};

export default StandContent;
