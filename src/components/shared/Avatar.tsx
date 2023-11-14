type Props = {
  photoURL: string;
  alt?: string;
};

const Avatar = ({ photoURL, alt }: Props) => {
  return (
    <div className="avatar">
      <div className="w-20 m-auto rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
        <img src={photoURL} alt={alt} />
      </div>
    </div>
  );
};

export default Avatar;
