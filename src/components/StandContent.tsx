import { useState } from 'react';
import { statusTranslator } from './utils/statusTranslator';
import { StandModel } from '../types/eventMapTypes';
import StandArtists from './StandArtists';

type Props = {
  stand: StandModel;
};

const StandContent = ({ stand }: Props) => {
  const { label, standNumber, status } = stand;

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

  return (
    <div
      className="w-full h-full z-20 absolute inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {tooltipVisible && (
        <div className="card card-compact w-48 p-2 shadow-md bg-accent left-10 rounded-md">
          <h1 className="capitalize text-center text-xl font-bold text-indigo-500">
            Stand {label}
            {standNumber}
          </h1>
          <h2
            className={`text-center text-x font-bold text-sm ${statusColor}`}
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
