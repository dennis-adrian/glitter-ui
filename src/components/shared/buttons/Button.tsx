import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
  icon?: IconDefinition;
  label?: string;
  styles?: string;
  type?: React.ButtonHTMLAttributes<HTMLButtonElement>['type'];
  onClick?: () => void;
};

const Button = ({ icon, label, styles, type = 'button', onClick }: Props) => {
  return (
    <button className={`btn ${styles}`} type={type} onClick={onClick}>
      {icon && <FontAwesomeIcon icon={icon} />}
      {label}
    </button>
  );
};

export default Button;
