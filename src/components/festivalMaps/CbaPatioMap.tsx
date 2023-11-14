import { useEffect, useState } from 'react';
import festivalMap from '../../assets/cba_patio_map.png';
import { cbaPatioPositionsV1 } from '../utils/standPositions';
import { StandModel, StandPosition } from '../../types/eventMapTypes';
import Stand from '../Stand';

type Props = {
  stands?: StandModel[];
};

const CbaPatioMap = ({ stands }: Props) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [galleryStands, setGalleryStands] = useState<StandModel[]>([]);

  useEffect(() => {
    const filteredStands = stands!.filter(
      (stand: StandModel) => stand.label === 'P',
    );

    setGalleryStands(filteredStands);
  }, [stands]);

  return (
    <div className="m-auto max-w-md p-1 mt-4">
      <h3 className="font-title text-xl my-3">Distribución del patio</h3>
      <div className="relative">
        <section className="flex justify-center w-100 m-auto">
          <img
            id="patioMap"
            src={festivalMap}
            alt="mapa del proximo evento"
            onLoad={() => setMapLoaded(true)}
          />
        </section>
        {mapLoaded &&
          galleryStands.map((stand) => {
            const position = cbaPatioPositionsV1.find(
              (position: StandPosition) => position.id === stand.standNumber,
            );

            return (
              <Stand
                key={stand.id}
                stand={stand}
                left={position?.left}
                top={position?.top}
                type="patio"
              />
            );
          })}
      </div>
    </div>
  );
};

export default CbaPatioMap;
