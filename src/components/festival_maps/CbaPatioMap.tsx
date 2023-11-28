import festivalMap from 'assets/cba_patio_v2.png';
import {
  cbaPatioPositionsV2,
  cbaPatioStandProportionsV2,
} from 'src/components/utils/stands.utils';
import { StandModel } from 'src/types/eventMapTypes';
import FestivalMap from './FestivalMap';

type Props = {
  stands: StandModel[];
  onStandClick: (stand: StandModel) => void;
};

const CbaPatioMap = ({ stands, onStandClick }: Props) => {
  const patioStands = stands!.filter(
    (stand: StandModel) => stand.label === 'P',
  );

  return (
    <FestivalMap
      label="Distribución del patio"
      mapImg={festivalMap}
      stands={patioStands}
      standsPositions={cbaPatioPositionsV2}
      standProportions={cbaPatioStandProportionsV2}
      onStandClick={onStandClick}
    />
  );
};

export default CbaPatioMap;
