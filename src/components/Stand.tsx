import { useState, useEffect } from 'react';
import { CSSProperties } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { updateStand } from '../store/features/festivalsSlice';
import { updateUserProperty } from '../store/features/currentUserSlice';

import { ElementSize, Reservation, StandModel } from '../types/eventMapTypes';
import StandContent from './StandContent';
import Modal from './shared/Modal';
import ReservationForm from './form/ReservationForm';
import { User } from '../types/userTypes';
import { post } from '../api/helpers';
import { getStandSize } from './helpers/stands.helpers';

type Props = {
  left?: number;
  stand: StandModel;
  top?: number;
  type?: 'patio' | 'gallery';
};

const Stand = ({ stand, left, top, type }: Props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const festival = useSelector((state: RootState) => state.activeFestival);
  const { label, standNumber, status, orientation } = stand;
  const [size, setSize] = useState<ElementSize>({
    wide: 0,
    narrow: 0,
  });
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const updateStands = async () => {
      let size;

      if (type === 'patio') {
        size = getStandSize('patioMap', {
          wideSide: 0.142,
          narrowSide: 0.115,
        });
      } else {
        size = getStandSize('galleryMap', {
          wideSide: 0.089,
          narrowSide: 0.059,
        });
      }

      if (size) setSize(size);
    };

    window.addEventListener('resize', updateStands);
    updateStands();

    return () => {
      window.removeEventListener('resize', updateStands);
    };
  }, [type]);

  const style: CSSProperties = {
    position: 'absolute',
    left: `${left}%`,
    top: `${top}%`,
    cursor: 'pointer',
    height: `${orientation === 'HORIZONTAL' ? size.narrow : size.wide}px`,
    width: `${orientation === 'HORIZONTAL' ? size.wide : size.narrow}px`,
  };

  const onReservationConfirm = async (extraArtist: User) => {
    const reservation = {
      artists: [
        {
          id: currentUser.id,
        },
      ],
      festivalId: festival.id,
      standId: stand.id,
    };

    if (extraArtist?.id) {
      reservation.artists.push({
        id: extraArtist.id,
      });
    }

    const createdReservation: Reservation = await post(
      'reservations',
      reservation,
    );

    if (!createdReservation.id) {
      setError('No se pudo reservar el stand. Intente de nuevo.');
      return;
    }

    dispatch(
      updateUserProperty({ field: 'hasActiveReservation', value: true }),
    );
    dispatch(
      updateStand({
        ...stand,
        status: createdReservation.stand?.status || 'AVAILABLE',
        reservations: [createdReservation],
      }),
    );
    setShowModal(false);
  };

  const handleClick = () => {
    if (currentUser.hasActiveReservation) return;
    if (status === 'RESERVED' || status === 'CONFIRMED') return;
    if (
      !festival.artistsWithoutReservation?.find(
        (artist) => artist.id === currentUser.id,
      )
    ) {
      return;
    }

    setShowModal(true);
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
    <>
      <div
        className={`${bgColor} bg-opacity-50`}
        key={standNumber}
        style={style}
        onClick={handleClick}
      >
        <StandContent
          orientation={orientation}
          stand={stand}
          standPosition={{ top: top || 0, left: left || 0 }}
        />
      </div>
      <Modal
        show={showModal}
        title={`Stand ${label}${standNumber}`}
        onClose={() => setShowModal(false)}
      >
        <ReservationForm
          errorMessage={error}
          onCancel={() => setShowModal(false)}
          onConfirm={onReservationConfirm}
          onTimeUp={() => setError('')}
        />
      </Modal>
    </>
  );
};

export default Stand;
