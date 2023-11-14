import { useState } from 'react';
import { statusTranslator } from './utils/statusTranslator';

type Props = {
  label: string;
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

  let statusColor = 'text-zinc-500'
  if (status == 'RESERVED') {
    statusColor = 'text-emerald-500'
  } else if (status === 'CONFIRMED') {
    statusColor = 'text-fuchsia-700'
  }

  return (
    <div
      className="w-full h-full z-20 absolute inline-block"
      onMouseEnter={showTooltip}
      onMouseLeave={hideTooltip}
    >
      {tooltipVisible && (
        <div className="card card-compact w-64 p-2 shadow-md bg-accent left-10 rounded-md">
          <h1 className="capitalize text-center font-bold text-indigo-500">
            Stand {label}
            {standNumber}
          </h1>
          <h2 className={`text-center lowercase text-x font-bold text-sm ${statusColor}`}>{statusTranslator(status)}</h2>
        </div>
      )}
    </div>
    // <div className="dropdown dropdown-hover">
    //   <label tabIndex={0} className="btn m-1">
    //     Click
    //   </label>
    //   <div
    //     tabIndex={0}
    //     className="dropdown-content z-[1] card card-compact w-64 p-2 shadow bg-primary text-primary-content"
    //   >
    //     <div className="card-body">
    //       <h3 className="card-title">Card title!</h3>
    //       <p>you can use any element as a dropdown.</p>
    //     </div>
    //   </div>
    // </div>
  );
};

export default StandContent;
