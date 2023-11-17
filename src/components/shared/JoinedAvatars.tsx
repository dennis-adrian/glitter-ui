import { User } from '../../types/userTypes';
import Avatar from './Avatar';

type Props = {
  artists: User[];
  withNames?: boolean;
};

const JoinedAvatars = ({ artists, withNames }: Props) => {
  return (
    <div className="flex flex-col text-center justify-center">
      <div className="avatar-group -space-x-6 rtl:space-x-reverse m-auto">
        {artists.map((artist) => (
          <Avatar
            key={artist!.id}
            photoURL={artist!.photoURL}
            alt={artist!.displayName}
            rounded
            withRing
          />
        ))}
      </div>
      {withNames && (
        <div>
          <span className="mt-2 font-bold text-indigo-500">
            {artists.map((artist) => artist!.displayName).join(' & ')}
          </span>
        </div>
      )}
    </div>
  );
};

export default JoinedAvatars;
