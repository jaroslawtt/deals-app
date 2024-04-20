import styles from './styles.module.scss';
import { getValidClassNames } from '~/libs/helpers/helpers.js';
import { AppRoute } from '~/libs/enums/enums.js';
import { type ValueOf } from '~/libs/types/types.js';
import { Link } from '~/libs/components/components.js';

type Properties = {
  label: string;
  style?: 'primary' | 'secondary';
  className?: string | undefined;
  onClick?: (() => void) | undefined;
  to?: ValueOf<typeof AppRoute> | undefined;
  type?: 'button' | 'submit';
};

const Button: React.FC<Properties> = ({
  label,
  style = 'primary',
  className,
  onClick,
  to,
  type,
}: Properties) => {
  const validClassNames = getValidClassNames(
    styles['button'],
    styles[style],
    className,
  );

  return to ? (
    <Link className={validClassNames} to={to}>
      <span>{label}</span>
    </Link>
  ) : (
    <button type={type} className={validClassNames} onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
