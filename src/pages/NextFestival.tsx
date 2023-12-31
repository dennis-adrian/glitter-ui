import { useSelector } from 'react-redux';
import { RootState } from 'src/store';

import FestivalMaps from 'src/components/festival_maps/FestivalMaps';

const NextFestivalPage = () => {
  const festival = useSelector((state: RootState) => state.activeFestival);

  return (
    <div>
      <section className="mb-6">
        <section className="font-title font-bold text-fuchsia-900">
          <h1 className="text-3xl mt-4 text-center">Mapa del Evento</h1>
          <h2 className="text-2xl my-2 text-center">1 y 2 de diciembre</h2>
        </section>
        <div className="max-w-screen-sm m-auto my-8">
          <div className="text-left p-2">
            <p>
              Si fuiste seleccionada o seleccionado para participar de nuestra
              siguiente versión de{' '}
              <span className="font-bold text-fuchsia-900">
                {festival.name}
              </span>{' '}
              en esta sección podrás elegir tu mesa para la edición de
              diciembre. En caso de compartir mesa, ambos artistas deben crearse
              cuenta
              <span className="font-bold"> (obligatorio)</span> y solamente uno
              debe reservar la mesa agregando al otro desde la pantalla de
              reserva
            </p>
          </div>
          <div className="card text-fuchsia-900 bg-amber-100 m-4 shadow-xl">
            <div className="card-body">
              Las medidas de la mesa son de aproximadamente 240cm x 60cm
            </div>
          </div>
        </div>
      </section>
      {(festival?.stands && festival.stands.length > 0) && (
        <FestivalMaps festival={festival} />
      )}
    </div>
  );
};

export default NextFestivalPage;
