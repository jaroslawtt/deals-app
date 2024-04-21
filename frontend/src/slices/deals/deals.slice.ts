import { DataStatus, SliceName } from '~/libs/enums/enums.js';
import { type ValueOf } from '~/libs/types/types.js';
import { type DealGetAllItemResponseDto } from '~/packages/deals/deals.js';
import { createSlice } from '@reduxjs/toolkit';
import { getAll } from '~/slices/deals/actions.js';

type State = {
  dataStatus: ValueOf<typeof DataStatus>;
  deals: DealGetAllItemResponseDto[] | null;
};

const initialState: State = {
  dataStatus: DataStatus.IDLE,
  deals: null,
};

const { reducer, actions } = createSlice({
  initialState,
  name: SliceName.DEALS,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAll.pending, (state) => {
      state.dataStatus = DataStatus.PENDING;
    });
    builder.addCase(getAll.fulfilled, (state, { payload }) => {
      state.dataStatus = DataStatus.FULFILLED;
      state.deals = payload.items;
    });
    builder.addCase(getAll.rejected, (state) => {
      state.dataStatus = DataStatus.REJECTED;
    });
  },
});

export { actions, reducer };
