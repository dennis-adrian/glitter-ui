import { CSSProperties } from 'react';

import { useSelector } from 'react-redux';
import { RootState } from '../store';

import { Reservation, StandModel } from '../types/eventMapTypes';
import StandContent from './StandContent';
import { getStandSize } from './helpers/stands.helpers';

type Props = {
  imgSize: { width: number; height: number };
  position: { left: number; top: number };
  proportions: { wideSide: number; narrowSide: number };
  stand: StandModel;
  onClick: (stand: StandModel) => void;
};

const Stand = ({ imgSize, position, proportions, stand, onClick }: Props) => {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const festival = useSelector((state: RootState) => state.activeFestival);
  const { standNumber, status, orientation } = stand;
  const size = getStandSize(imgSize, proportions);

  const style: CSSProperties = {
    position: 'absolute',
    left: `${position.left}%`,
    top: `${position.top}%`,
    cursor: 'pointer',
    height: `${orientation === 'HORIZONTAL' ? size.narrow : size.wide}px`,
    width: `${orientation === 'HORIZONTAL' ? size.wide : size.narrow}px`,
  };

  const handleClick = () => {
    if (!currentUser?.id) return;
    if (currentUser.hasActiveReservation) return;
    if (status === 'RESERVED' || status === 'CONFIRMED') return;
    const festivalReservations: Reservation[] = festival.reservations || [];
    const artistsWithReservationsIds = festivalReservations?.flatMap(
      (reservation) => reservation.artists?.map((artist) => artist.id),
    );
    if (artistsWithReservationsIds?.includes(currentUser?.id)) {
      return;
    }

    onClick(stand);
  };

  let bgColor = 'hover:bg-opacity-60 ';
  if (status === 'RESERVED') {
    bgColor += 'bg-emerald-200 hover:bg-emerald-400';
  } else if (status === 'CONFIRMED') {
    bgColor += 'bg-fuchsia-600 hover:bg-fuchsia-800';
  } else {
    bgColor += 'hover:bg-accent hover:bg-opacity-60';
  }

  return (
    <div
      className={`${bgColor} bg-opacity-50`}
      key={standNumber}
      style={style}
      onClick={handleClick}
    >
      <StandContent
        orientation={orientation}
        stand={stand}
        standPosition={{ top: position.top || 0, left: position.left || 0 }}
      />
    </div>
  );
};

export default Stand;
