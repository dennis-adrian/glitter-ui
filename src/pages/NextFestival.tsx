import { useSelector } from 'react-redux';
import { RootState } from '../store';

import CbaGalleryMap from '../components/festivalMaps/CbaGalleryMap';
import CbaPatioMap from '../components/festivalMaps/CbaPatioMap';

const NextFestivalPage = () => {
  const { stands } = useSelector((state: RootState) => state.activeFestival);
  const activeFestival = useSelector(
    (state: RootState) => state.activeFestival,
  );

  return (
    <>
      <section className="mb-6">
        <section className="font-title font-bold text-fuchsia-900">
          <h1 className="text-3xl mt-4 text-center">Mapa del Evento</h1>
          <h2 className="text-2xl my-2 text-center">1 y 2 de diciembre</h2>
        </section>
        <div className="max-w-screen-sm m-auto my-8">
          <div className="text-left">
            <p>
              Si fuiste seleccionada o seleccionado para particiar de nuestra
              siguiente version de <span className="font-bold text-fuchsia-600">{activeFestival.name}</span> en esta
              sección podrás elegir tu mesa para la edición de diciembre. En
              caso de compartir stand, ambos artistas deben crearse cuenta
              (obligatorio) y solo uno debe reservar la mesa agregando al otro
              desde la pantalla de reserva
            </p>
            <p className="text-center font-bold text-fuchsia-900 my-8">
              *Las medidas del stand son de 120cm x 60cm aprox*
            </p>
          </div>
        </div>
      </section>
      <CbaGalleryMap stands={stands} />
      <CbaPatioMap stands={stands} />
    </>
  );
};

export default NextFestivalPage;
