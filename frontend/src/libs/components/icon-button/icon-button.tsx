import { type Properties as ButtonProperties } from '~/libs/components/button/button.js';
import { Button } from '~/libs/components/components.js';
import { getValidClassNames } from '~/libs/helpers/helpers.js';
import { type IconType } from '~/libs/types/types.js';

import styles from './styles.module.scss';

type Properties = Omit<ButtonProperties, 'icon'> & {
  icon: IconType;
};

const IconButton: React.FC<Properties> = ({
  icon,
  label,
  onClick,
  className,
  to,
}: Properties) => (
  <Button
    icon={icon}
    label={label}
    onClick={onClick}
    style="primary"
    to={to}
    className={getValidClassNames(styles['icon-button'], className)}
  />
);

export { IconButton };
