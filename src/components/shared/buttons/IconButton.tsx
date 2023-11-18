import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import Button from './Button';

type Props = {
  icon: IconDefinition;
  styles?: string;
  onClick: () => void;
};

const IconButton = ({ icon, styles, onClick }: Props) => {
  return (
    <Button
      icon={icon}
      styles={`${styles} btn btn-ghost btn-sm btn-circle`}
      onClick={onClick}
    />
  );
};

export default IconButton;
