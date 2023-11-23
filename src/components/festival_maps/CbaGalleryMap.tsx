import festivalMap from 'assets/cba_gallery.png';
import {
  cbaGalleryPositionsV1,
  cbaGalleryStandProportions,
} from 'src/components/utils/stands.utils';
import { StandModel } from 'src/types/eventMapTypes';
import FestivalMap from './FestivalMap';

type Props = {
  stands: StandModel[];
};

const CbaGalleryMap = ({ stands }: Props) => {
  const galleryStands = stands.filter(
    (stand: StandModel) => stand.label === 'G',
  );

  return (
    <FestivalMap
      label="Distribución de la galería"
      mapImg={festivalMap}
      stands={galleryStands}
      standsPositions={cbaGalleryPositionsV1}
      standProportions={cbaGalleryStandProportions}
    />
  );
};

export default CbaGalleryMap;
