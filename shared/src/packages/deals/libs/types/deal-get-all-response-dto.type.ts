import { type DealGetAllItemResponseDto } from '~/packages/deals/libs/types/deal-get-all-item-response-dto.type.js';

type DealGetAllResponseDto = {
  items: DealGetAllItemResponseDto[];
};

export { type DealGetAllResponseDto };
