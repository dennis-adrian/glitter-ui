import { useSelector } from 'react-redux';
import { RootState } from '../store';

import CbaGalleryMap from '../components/festivalMaps/CbaGalleryMap';
import CbaPatioMap from '../components/festivalMaps/CbaPatioMap';

const NextFestivalPage = () => {
  const { stands } = useSelector((state: RootState) => state.activeFestival)

  return (
    <>
      <section className="mb-6">
        <h1 className="text-3xl my-4 text-center">Mapa del Evento</h1>
        <h2 className="text-2xl my-4 text-center">1 y 2 de diciembre</h2>
      </section>
      <CbaGalleryMap stands={stands} />
      <CbaPatioMap stands={stands} />
    </>
  );
};

export default NextFestivalPage;
