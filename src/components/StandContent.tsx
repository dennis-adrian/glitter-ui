import { useState } from 'react';
import { statusTranslator } from './utils/statusTranslator';
import { StandModel } from '../types/eventMapTypes';
import StandArtists from './StandArtists';

type Props = {
  orientation: 'HORIZONTAL' | 'VERTICAL';
  stand: StandModel;
  standPosition: { left: number; top: number };
};

const StandContent = ({ orientation, stand, standPosition }: Props) => {
  const { label, standNumber, status } = stand;
  const { left, top } = standPosition;

  const [tooltipVisible, setTooltipVisible] = useState(false);
  const showTooltip = () => {
    setTooltipVisible(true);
  };

  const hideTooltip = () => {
    setTooltipVisible(false);
  };

  let statusColor = 'text-zinc-500';
  if (status == 'RESERVED') {
    statusColor = 'text-emerald-500';
  } else if (status === 'CONFIRMED') {
    statusColor = 'text-fuchsia-700';
  }

  let position;
  if (orientation === 'HORIZONTAL' && top! < 50) {
    position = 'top-10 left-1/2 transform -translate-x-1/2';
  } else if (orientation === 'HORIZONTAL' && top! > 50) {
    position = '-top-56 left-1/2 transform -translate-x-1/2';
  } else if (orientation === 'VERTICAL' && left! > 50) {
    position = '-left-52 top-1/2 transform -translate-y-1/2';
  } else {
    position = 'top-1/2 left-10 transform -translate-y-1/2';
  }

  return (
    <div
      className="w-full h-full z-20 absolute inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {tooltipVisible && (
        <div
          className={`card card-compact w-48 p-2 shadow-md bg-accent rounded-md" ${position}`}
        >
          <h1 className="capitalize text-center text-xl font-bold text-indigo-500">
            Stand {label}
            {standNumber}
          </h1>
          <h2
            className={`uppercase text-center text-x font-bold text-sm ${statusColor}`}
          >
            {statusTranslator(status)}
          </h2>
          <StandArtists stand={stand} />
        </div>
      )}
    </div>
  );
};

export default StandContent;
