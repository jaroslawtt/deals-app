import styles from './styles.module.scss';
import { Header } from '~/libs/components/components.js';
import { useAppSelector } from '~/libs/hooks/hooks.js';

type Properties = {
  children: React.ReactNode;
  showHeaderControls?: boolean | undefined;
};

const PageLayout: React.FC<Properties> = ({
  children,
  showHeaderControls = true,
}) => {
  const { user } = useAppSelector(({ auth }) => ({
    user: auth.user,
  }));

  return (
    <div className={styles['page-layout-wrapper']}>
      <div className={styles['header-wrapper']}>
        <Header user={user} showControls={showHeaderControls} />
      </div>
      <div className={styles['page-content-wrapper']}>{children}</div>
    </div>
  );
};

export { PageLayout };
