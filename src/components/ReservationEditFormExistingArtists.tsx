import { User } from 'src/types/userTypes';

import IconButton from './shared/buttons/IconButton';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type Props = {
  artist: User;
  artistIndex: number;
};

const ReservationEditFormExistingArtists = ({ artist }: Props) => {
  return (
    <div key={artist.id} className="flex justify-between my-4">
      <h1>{artist.displayName}</h1>
      <IconButton icon={faTrash} onClick={() => {}} styles="ml-2" />
    </div>
  );
};

export default ReservationEditFormExistingArtists;
