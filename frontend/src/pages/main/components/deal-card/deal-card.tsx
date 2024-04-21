import styles from './styles.module.scss';
import { type DealGetAllItemResponseDto } from '~/packages/deals/deals.js';

type Properties = {
  deal: DealGetAllItemResponseDto;
};

const DealCard: React.FC<Properties> = ({ deal }: Properties) => {
  const formatter = new Intl.NumberFormat('fr-FR', {
    style: 'decimal',
    maximumFractionDigits: 0,
  });
  return (
    <div className={styles['card-wrapper']}>
      <div className={styles['card-image-wrapper']}>
        <img className={styles['card-image']} alt="deal image" src={`${deal.imageLink}`} />
        <div className={styles['card-data']}>
          <span className={styles['card-main-caption']}>{deal.name}</span>
          <div className={styles['card-sub-data']}>
            <span className={styles['card-price-caption']}>
              {...formatter
                .format(deal.price)
                .split(' ')
                .map((character) => `${character} `)}{' '}
              Dhs
            </span>
            <span>Yield {deal.yieldPercentage}%</span>
          </div>
          <div className={styles['card-sub-data']}>
            <span>
              Ticket -{' '}
              {...formatter
                .format(deal.ticketPrice)
                .split(' ')
                .map((character) => `${character} `)}{' '}
              Dhs
            </span>
            <span>Days left {deal.daysRemaining}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { DealCard };
