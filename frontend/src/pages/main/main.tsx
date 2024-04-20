import styles from './styles.module.scss';
import { Button, PageLayout } from '~/libs/components/components.js';
import { useCallback, useRef } from '~/libs/hooks/hooks.js';

const MainPage = () => {
  const dealsListRef = useRef<HTMLDivElement>([]);
  const handleScrollToDeals = useCallback(() => {
    dealsListRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'end',
      inline: 'nearest',
    });
  }, []);

  return (
    <PageLayout>
      <div className={styles['page-wrapper']}>
        <div className={styles['main-section']}>
          <div className={styles['main-content']}>
            <span className={styles['main-caption']}>
              The chemical negatively charged
            </span>
            <span className={styles['sub-caption']}>
              Numerous calculations predict, and experiments confirm, that the
              force field reflects the beam, while the mass defect is not
              formed. The chemical compound is negatively charged. Twhile the
              mass defect is
            </span>
            <Button
              className={styles['main-btn']}
              label="Get started"
              onClick={handleScrollToDeals}
            />
          </div>
        </div>
        <div
          id="deals-list"
          ref={dealsListRef}
          className={styles['deals-list-section']}
        >
          <span className={styles['deals-list-caption']}>Open Deals</span>
        </div>
      </div>
    </PageLayout>
  );
};

export { MainPage };
