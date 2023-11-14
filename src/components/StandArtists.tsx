import { StandModel } from '../types/eventMapTypes';
import logo from '../assets/logo_with_background.png';
import Avatar from './shared/Avatar';

type Props = {
  stand: StandModel;
};
const StandArtists = ({ stand }: Props) => {
  const artists = stand.reservations?.map((reservation) => reservation.artist);

  let cardBody;
  let label;
  if (!artists?.length) {
    cardBody = <Avatar photoURL={logo} alt="logo" />;
    label = 'Glitter';
  } else if (artists.length === 1) {
    cardBody = (
      <Avatar photoURL={artists[0]!.photoURL} alt={artists[0]!.displayName} />
    );
    label = artists[0]!.displayName;
  } else {
    cardBody = (
      <div className="avatar-group -space-x-6 rtl:space-x-reverse">
        {artists.map((artist) => (
          <Avatar
            key={artist!.id}
            photoURL={artist!.photoURL}
            alt={artist!.displayName}
          />
        ))}
      </div>
    );
    label = artists.map((artist) => artist!.displayName).join(' & ');
  }

  return (
    <div className="card-body text-center">
      {cardBody}
      <span className="mt-2 font-bold text-indigo-500">{label}</span>
    </div>
  );
};

export default StandArtists;
