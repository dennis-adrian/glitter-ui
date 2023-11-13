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
      <section className="mb-6">
        <h1 className="text-3xl my-4 text-center">Mapa del Evento</h1>
        <h2 className="text-2xl my-4 text-center">1 y 2 de diciembre</h2>
      </section>
      <div className="m-auto max-w-md p-1">
        <h3 className="text-xl m-3">Distribución de la galería</h3>
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
