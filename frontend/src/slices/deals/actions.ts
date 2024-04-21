import { createAsyncThunk } from '@reduxjs/toolkit';
import { type DealGetAllResponseDto } from '~/packages/deals/deals.js';
import { type AsyncThunkConfig } from '~/libs/types/types.js';
import { SliceName } from '~/libs/enums/slice-name.enum.js';

const sliceName = SliceName.DEALS;

const getAll = createAsyncThunk<DealGetAllResponseDto, void, AsyncThunkConfig>(
  `${sliceName}/get-all`,
  async (payload, { extra }) => {
    const { dealsApi } = extra;

    return dealsApi.getAll();
  },
);

export { getAll };
