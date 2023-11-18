import Button from './Button';

type Props = {
  label?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
};

const PrimaryButton = ({ label = 'Primary', type, onClick }: Props) => {
  return (
    <Button label={label} styles="btn-primary" type={type} onClick={onClick} />
  );
};

export default PrimaryButton;
