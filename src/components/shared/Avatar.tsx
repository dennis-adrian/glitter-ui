type Props = {
  photoURL: string;
  alt?: string;
  displayName?: string;
  masked?: boolean;
  rounded?: boolean;
  withRing?: boolean;
  withName?: boolean;
  width?: string;
};

const Avatar = ({
  photoURL,
  alt,
  displayName,
  masked,
  rounded,
  withName,
  withRing,
  width,
}: Props) => {
  let styles = `${width ? width : 'w-20'} m-auto`;
  if (rounded) {
    styles += ' rounded-full';
  }

  if (masked) {
    styles += ' mask mask-squircle';
  }

  if (withRing) {
    styles += ' ring ring-primary ring-offset-base-100 ring-offset-2';
  }

  return (
    <div className="flex flex-col text-center justify-center">
      <div className="avatar">
        <div className={styles}>
          <img src={photoURL} alt={alt} />
        </div>
      </div>

      {withName && (
        <div>
          <span className="mt-2 font-bold text-indigo-500">{displayName}</span>
        </div>
      )}
    </div>
  );
};

export default Avatar;
