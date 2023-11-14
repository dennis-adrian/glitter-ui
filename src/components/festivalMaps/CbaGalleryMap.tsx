import { useEffect, useState } from 'react';

import festivalMap from '../../assets/cba_gallery.png';
import { cbaGalleryPositionsV1 } from '../utils/standPositions';
import { StandModel, StandPosition } from '../../types/eventMapTypes';
import Stand from '../Stand';

type Props = {
  stands?: StandModel[];
};

const CbaGalleryMap = ({ stands }: Props) => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [galleryStands, setGalleryStands] = useState<StandModel[]>([]);

  useEffect(() => {
    const filteredStands = stands!.filter(
      (stand: StandModel) => stand.label === 'G',
    );

    setGalleryStands(filteredStands);
  }, [stands]);

  return (
    <div className="m-auto max-w-md p-1">
      <h3 className="text-xl my-3">Distribución de la galería</h3>
      <div className="relative">
        <section className="flex justify-center w-100 m-auto">
          <img
            id="galleryMap"
            src={festivalMap}
            alt="mapa del proximo evento"
            onLoad={() => setMapLoaded(true)}
          />
        </section>
        {mapLoaded &&
          galleryStands.map((stand) => {
            const position = cbaGalleryPositionsV1.find(
              (position: StandPosition) => position.id === stand.standNumber,
            );

            return (
              <Stand
                key={stand.id}
                stand={stand}
                left={position?.left}
                top={position?.top}
                type='gallery'
              />
            );
          })}
      </div>
    </div>
  );
};

export default CbaGalleryMap;
