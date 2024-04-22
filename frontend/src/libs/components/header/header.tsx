import styles from './styles.module.scss';
import { Button, Icon, Link } from '~/libs/components/components.js';
import { AppRoute } from '~/libs/enums/enums';
import { type UserAuthResponse } from '~/packages/users/users.js';
import { useAppDispatch, useCallback } from '~/libs/hooks/hooks.js';
import { actions as authActions } from '~/slices/auth/auth.js';
import { getValidClassNames } from '~/libs/helpers/helpers';
import { IconButton } from '~/libs/components/icon-button/icon-button';

type Properties = {
  user: UserAuthResponse | null;
  showControls?: boolean | undefined;
};

const Header: React.FC<Properties> = ({
  user,
  showControls = true,
}: Properties) => {
  const dispatch = useAppDispatch();

  const handleLogOut = useCallback(() => {
    dispatch(authActions.signOut());
  }, []);

  const controls = user ? (
    <Button
      className={styles['log-out-btn']}
      label="Log out"
      onClick={handleLogOut}
    />
  ) : (
    <>
      <Button
        style="secondary"
        label="Log in"
        to={AppRoute.SIGN_IN}
        className={styles['sign-in-btn']}
      />
      <Button
        label="Sign Up"
        to={AppRoute.SIGN_UP}
        className={styles['sign-up-btn']}
      />
    </>
  );

  return (
    <header className={styles['header']}>
      {showControls ? (
        <div className={styles['control-panel']}>
          <div className={styles['controls-wrapper']}>{controls}</div>
          <div className={styles['icon-wrapper']}>
            {user ? (
              <IconButton
                className={getValidClassNames(
                  styles['icon'],
                  styles['log-out-icon'],
                )}
                label=""
                icon="rightToBracket"
                onClick={handleLogOut}
              />
            ) : (
              <Link to={AppRoute.SIGN_IN}>
                <Icon
                  className={getValidClassNames(
                    styles['icon'],
                    styles['log-in-icon'],
                  )}
                  iconName="rightToBracket"
                />{' '}
              </Link>
            )}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export { Header };
