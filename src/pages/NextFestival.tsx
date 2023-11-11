import festivalMap from '../assets/cba_gallery.png';
import StandPosition from '../components/Stand';

const NextFestivalPage = () => {
  const stands = [
    {
      standNumber: 1,
      left: 28,
      top: 0,
      isHorizontal: false,
      isAvailable: false,
    },
    {
      standNumber: 2,
      left: 30,
      top: 90.48,
      isHorizontal: true,
      isAvailable: false,
    },
  ];

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
          {stands.map((stand) => (
            <StandPosition key={stand.standNumber} {...stand} />
          ))}
        </div>
      </div>
    </>
  );
};

export default NextFestivalPage;
