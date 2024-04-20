import styles from './styles.module.scss';
import { PageLayout, Redirect } from '~/libs/components/components.js';
import { SignInForm } from '~/pages/auth/components/components.js';
import {
  useAppDispatch,
  useAppSelector,
  useCallback,
  useLocation,
} from '~/libs/hooks/hooks.js';
import {
  type UserSignInRequestDto,
  type UserSignUpRequestDto,
} from '~/packages/users/users.js';
import { AppRoute } from '~/libs/enums/enums.js';
import { actions as authActions } from '~/slices/auth/auth.js';
import SignUpForm from '~/pages/auth/components/sign-up-form/sign-up-form';

const AuthPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();

  const { user } = useAppSelector((state) => ({
    user: state.auth.user,
  }));

  const hasUser = Boolean(user);

  const handleSignInFormSubmit = useCallback(
    (payload: UserSignInRequestDto) => {
      void dispatch(authActions.signIn(payload));
    },
    [dispatch],
  );

  const handleSignUpFormSubmit = useCallback(
    (payload: UserSignUpRequestDto) => {
      void dispatch(authActions.signUp(payload));
    },
    [dispatch],
  );

  const showAuthForm = useCallback(() => {
    switch (pathname) {
      case AppRoute.SIGN_IN:
        return <SignInForm onSubmit={handleSignInFormSubmit} />;
      case AppRoute.SIGN_UP:
        return <SignUpForm onSubmit={handleSignUpFormSubmit} />;
    }
  }, [pathname]);

  if (hasUser) {
    return <Redirect to={AppRoute.ROOT} />;
  }

  return (
    <PageLayout showHeaderControls={false}>
      <div className={styles['page-content-wrapper']}>
        <div className={styles['image-wrapper']} />
        <div className={styles['form-wrapper']}>{showAuthForm()}</div>
      </div>
    </PageLayout>
  );
};

export { AuthPage };
