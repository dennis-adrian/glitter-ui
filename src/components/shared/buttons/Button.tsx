type Props = {
  label?: string;
  type?: string;
  onClick?: () => void;
};
const Button = ({ label = 'Button', type, onClick }: Props) => {
  return (
    <button className={`btn ${type}`} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
