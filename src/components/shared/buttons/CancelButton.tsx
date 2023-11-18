import Button from './Button';

type Props = {
  onClick?: () => void;
};

const CancelButton = ({ onClick }: Props) => {
  return (
    <Button label="Cancelar" type="btn-error btn-outline" onClick={onClick} />
  );
};

export default CancelButton;
