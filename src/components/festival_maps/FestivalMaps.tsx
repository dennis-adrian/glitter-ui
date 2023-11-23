import CbaGalleryMap from './CbaGalleryMap';
import CbaPatioMap from './CbaPatioMap';
import { Festival } from 'src/types/festivalTypes';
import Modal from '../shared/modal/Modal';
import { useState } from 'react';
import { StandModel } from 'src/types/eventMapTypes';
import ReservationCreationForm from '../reservations/ReservationCreationForm';
import ModalHeader from '../shared/modal/ModalHeader';

type Props = {
  festival: Festival;
};

const FestivalMaps = ({ festival }: Props) => {
  const [selectedStand, setSelectedStand] = useState<StandModel | null>(null);
  const [showModal, setShowModal] = useState(false);

  const onStandClick = (stand: StandModel) => {
    setSelectedStand(stand);
    setShowModal(true);
  };

  return (
    <>
      <CbaGalleryMap stands={festival.stands!} onStandClick={onStandClick} />
      <CbaPatioMap stands={festival.stands!} onStandClick={onStandClick} />
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        {selectedStand && (
          <>
            <ModalHeader
              title={`Stand ${selectedStand.label}${selectedStand.standNumber}`}
              onHide={() => setShowModal(false)}
            />
            <ReservationCreationForm
              stand={selectedStand}
              onCancel={() => setShowModal(false)}
            />
          </>
        )}
      </Modal>
    </>
  );
};

export default FestivalMaps;
