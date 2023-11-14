import { redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { Link } from 'react-router-dom';

const UserProfile = () => {
  const currentUser = useSelector((state: RootState) => state.currentUser);
  const activeFestival = useSelector(
    (state: RootState) => state.activeFestival,
  );

  if (!currentUser) redirect('/login');

  const getCurrentUserFestival = () => {
    if (currentUser.festivals?.length) {
      return currentUser.festivals.find((festival) => {
        return festival.id === activeFestival.id;
      });
    } else {
      return null;
    }
  };

  const generateBodyContent = () => {
    if (currentUser.status === 'ACTIVE') {
      return (
        <>
          <div>
            Tu cuenta ha sido{' '}
            <span className="badge bg-emerald-200">aprobada</span>
          </div>
          {getCurrentUserFestival() ? (
            <div className="card w-full bg-base-100 shadow-xl mt-8">
              <div className="card-body text-left">
                <span>Eres parte de nuestro siguiente evento: </span>
                <div className="flex justify-center">
                  <span className="badge badge-lg badge-outline badge-primary ">
                    {activeFestival.name}
                  </span>
                </div>
                <span>
                  Si no reservaste tu stand aún puedes hacerlo{' '}
                  <Link className="text-yellow-700" to={'/next_event'}>
                    aquí
                  </Link>
                </span>
              </div>
            </div>
          ) : (
            <div className="card w-full bg-base-100 shadow-xl mt-8">
              <div className="card-body text-left">
                <p>No estas registrado para nuestro siguiente evento</p>
                <p>
                  Si deseas participar puedes enviar un correo a{' '}
                  <a
                    href="mailto:glitter.festival.creativo@gmail.com"
                    className="text-yellow-700"
                  >
                    glitter.festival.creativo@gmail.com
                  </a>
                </p>
              </div>
            </div>
          )}
        </>
      );
    } else {
      return (
        <>
          <div>
            <span>Estado de cuenta: </span>{' '}
            <span className="badge bg-amber-200">en espera de aprobación</span>
          </div>
          <div className="card w-full bg-base-100 shadow-xl mt-8">
            <div className="card-body text-left">
              <div>
                <span>
                  El equipo de Glitter se comunicara contigo cuando tu cuenta
                  sea aprobada
                </span>
              </div>
              <div className="mt-2">
                <span>
                  O puedes mandarnos un correo a{' '}
                  <a
                    href="mailto:glitter.festival.creativo@gmail.com"
                    className="text-yellow-700"
                  >
                    glitter.festival.creativo@gmail.com
                  </a>
                </span>
              </div>
            </div>
          </div>
        </>
      );
    }
  };

  return (
    <div className="container flex flex-row max-w-screen-md m-auto p-8">
      <div className="m-auto text-center">
        <section>
          <h1 className="text-lg">Bienvenido a la comunidad Glitter</h1>
          <h2 className="font-bold text-xl text-indigo-500">
            {currentUser.displayName}
          </h2>
        </section>
        <div className="avatar">
          <div className="w-36 rounded-full m-8">
            <img src={currentUser?.photoURL} alt="glitter logo" />
          </div>
        </div>
        <div>{generateBodyContent()}</div>
      </div>
    </div>
  );
};

export default UserProfile;
