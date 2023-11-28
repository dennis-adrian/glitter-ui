import festivalMap from 'assets/cba_patio_map.png';
import {
  cbaPatioPositionsV1,
  cbaPatioStandProportions,
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
      standsPositions={cbaPatioPositionsV1}
      standProportions={cbaPatioStandProportions}
      onStandClick={onStandClick}
    />
  );
};

export default CbaPatioMap;