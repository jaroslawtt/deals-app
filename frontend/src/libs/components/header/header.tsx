import styles from './styles.module.scss';
import { Button } from '~/libs/components/components.js';
import { AppRoute } from '~/libs/enums/enums';
import { type UserAuthResponse } from '~/packages/users/users.js';
import { useAppDispatch, useCallback } from '~/libs/hooks/hooks.js';
import { actions as authActions } from '~/slices/auth/auth.js';

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
      <div className={styles['control-panel']}>
        {showControls ? controls : null}
      </div>
    </header>
  );
};

export { Header };
