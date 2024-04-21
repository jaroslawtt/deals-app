import { actions } from '~/slices/deals/deals.slice.js';
import { getAll } from '~/slices/deals/actions.js';

const allActions = {
  ...actions,
  getAll,
};

export { allActions as actions };
export { reducer } from './deals.slice.js';
