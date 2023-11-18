import Button from './Button';

type Props = {
  label?: string;
  onClick?: () => void;
};

const PrimaryButton = ({ label = 'Primary', onClick }: Props) => {
  return <Button label={label} type="btn-primary" onClick={onClick} />;
};

export default PrimaryButton;
