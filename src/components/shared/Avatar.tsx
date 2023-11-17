type Props = {
  photoURL: string;
  alt?: string;
  masked?: boolean;
  rounded?: boolean;
  withRing?: boolean;
};

const Avatar = ({ photoURL, alt, masked, rounded, withRing }: Props) => {
  let styles = 'w-20 m-auto';
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
    <div className="avatar">
      <div className={styles}>
        <img src={photoURL} alt={alt} />
      </div>
    </div>
  );
};

export default Avatar;
