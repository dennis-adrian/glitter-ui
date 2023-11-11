import festivalMap from '../assets/cba_gallery.png';
import Stand from '../components/Stand';
import { cbaGalleryPositionsV1 } from '../components/utils/standPositions';
import { StandPosition } from '../types/eventMapTypes';
import { demoStands } from '../utils/demoStands';

const NextFestivalPage = () => {
  const stands = demoStands;

  return (
    <>
      <div className="m-auto max-w-screen-md">
        <div className="relative">
          <section className="flex justify-center w-100 m-auto">
            <img
              id="galleryMap"
              src={festivalMap}
              alt="mapa del proximo evento"
            />
          </section>
          {stands.map((stand) => {
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
