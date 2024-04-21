import styles from './styles.module.scss';
import { Button, PageLayout } from '~/libs/components/components.js';
import {
  useAppDispatch,
  useAppSelector,
  useCallback,
  useEffect,
  useRef,
} from '~/libs/hooks/hooks.js';
import { actions as dealsActions } from '~/slices/deals/deals.js';
import { DealCard } from '~/pages/main/components/components';

const MainPage = () => {
  const dealsListRef = useRef<HTMLDivElement | null>(null);
  const handleScrollToDeals = useCallback(() => {
    (dealsListRef.current as HTMLDivElement).scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }, []);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(dealsActions.getAll());
  }, []);

  const { deals: dealsList } = useAppSelector(({ deals }) => ({
    deals: deals.deals,
  }));

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
          <div className={styles['deals-list-wrapper']}>
            <div className={styles['deals-list']}>
              {dealsList
                ? dealsList.map((deal) => (
                    <DealCard key={deal.id} deal={deal} />
                  ))
                : null}
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export { MainPage };
