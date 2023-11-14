import { useState, useEffect } from 'react';
import { CSSProperties } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ElementSize, Reservation, StandModel } from '../types/eventMapTypes';
import StandContent from './StandContent';
import Modal from './shared/Modal';
import ReservationForm from './form/ReservationForm';
import { User } from '../types/userTypes';
import { updateStand } from '../store/features/festivalsSlice';
import { RootState } from '../store';
import { update } from '../api/helpers';

type Props = {
  left?: number;
  top?: number;
  stand: StandModel;
};

const Stand = ({ stand, left, top }: Props) => {
  const dispatch = useDispatch();
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const { label, standNumber, status, orientation } = stand;
  const [size, setSize] = useState<ElementSize>({
    wide: 0,
    narrow: 0,
  });
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    const updateStands = async () => {
      const mapImg = document.getElementById('galleryMap');
      if (mapImg) {
        const { width: imgWidth, height: imgHeight } =
          mapImg.getBoundingClientRect();
        const size = {
          wide: imgWidth * 0.089 || 0,
          narrow: imgHeight * 0.059 || 0,
        };
        setSize(size);
      }
    };

    window.addEventListener('resize', updateStands);
    updateStands();

    return () => {
      window.removeEventListener('resize', updateStands);
    };
  }, []);

  const style: CSSProperties = {
    position: 'absolute',
    left: `${left}%`,
    top: `${top}%`,
    cursor: 'pointer',
    height: `${orientation === 'HORIZONTAL' ? size.narrow : size.wide}px`,
    width: `${orientation === 'HORIZONTAL' ? size.wide : size.narrow}px`,
  };

  const onReservationConfirm = async (extraArtist: User) => {
    let reservations: Reservation[] = [
      {
        artistId: currentUser.id!,
        requestedById: currentUser.id!,
      },
    ];

    if (extraArtist) {
      reservations = [
        ...reservations,
        {
          artistId: extraArtist.id!,
          requestedById: currentUser.id!,
        },
      ];
    }

    const updatedStand = await update('stands', stand.id!.toString(), {
      ...stand,
      status: 'RESERVED',
      reservations,
    });

    dispatch(updateStand(updatedStand));
    setShowModal(false);
  };

  let bgColor = 'hover:bg-opacity-60 ';
  if (status === 'RESERVED') {
    bgColor += 'bg-emerald-200 hover:bg-emerald-400';
  } else if (status === 'SOLD') {
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
        onClick={() => setShowModal(true)}
      >
        <StandContent
          label={label || ''}
          standNumber={standNumber}
          status={status}
        />
      </div>
      <Modal
        show={showModal}
        title={`Stand ${label}${standNumber}`}
        onClose={() => setShowModal(false)}
      >
        <ReservationForm
          onCancel={() => setShowModal(false)}
          onConfirm={onReservationConfirm}
        />
      </Modal>
    </>
  );
};

export default Stand;
