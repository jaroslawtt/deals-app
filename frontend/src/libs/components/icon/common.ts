import { ReactComponent as RightToBracket } from '~/assets/img/right-to-bracket.svg';
import { type IconType } from '~/libs/types/types.js';

const iconNameToSvgIcon: Record<
  IconType,
  React.FC<React.SVGProps<SVGSVGElement>>
> = {
  'rightToBracket': RightToBracket,
};

export { iconNameToSvgIcon };
