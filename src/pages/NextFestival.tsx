import { useEffect, useState } from 'react';
import festivalMap from '../assets/cba_gallery.png';
import Stand from '../components/Stand';
import { cbaGalleryPositionsV1 } from '../components/utils/standPositions';
import { StandModel, StandPosition } from '../types/eventMapTypes';
import { get } from '../api/helpers';

const NextFestivalPage = () => {
  const [mapLoaded, setMapLoaded] = useState(false);
  const [galleryStands, setGalleryStands] = useState<StandModel[]>([]);

  useEffect(() => {
    const fetchStands = async () => {
      const stands = await get('stands');
      if (stands?.length) {
        const filteredStands = stands.filter(
          (stand: StandModel) => stand.label === 'G',
        );
        setGalleryStands(filteredStands);
      }
    };

    fetchStands();
  }, []);

  return (
    <>
      <div className="m-auto max-w-md">
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
                  key={stand.standNumber}
                  {...stand}
                  left={position?.left}
                  top={position?.top}
                />
              );
            })}
        </div>
      </div>
    </>
  );
};

export default NextFestivalPage;
