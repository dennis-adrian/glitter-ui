import festivalMap from 'assets/cba_gallery_v2.png';
import {
  cbaGalleryPositionsV2,
  cbaGalleryStandProportionsV2,
} from 'src/components/utils/stands.utils';
import { StandModel } from 'src/types/eventMapTypes';
import FestivalMap from './FestivalMap';

type Props = {
  stands: StandModel[];
  onStandClick: (stand: StandModel) => void;
};

const CbaGalleryMap = ({ stands, onStandClick }: Props) => {
  const galleryStands = stands.filter(
    (stand: StandModel) => stand.label === 'G',
  );

  return (
    <FestivalMap
      label="Distribución de la galería"
      mapImg={festivalMap}
      stands={galleryStands}
      standsPositions={cbaGalleryPositionsV2}
      standProportions={cbaGalleryStandProportionsV2}
      onStandClick={onStandClick}
    />
  );
};

export default CbaGalleryMap;
