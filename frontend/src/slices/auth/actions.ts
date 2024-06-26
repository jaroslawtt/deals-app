import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  type UserAuthResponse,
  type UserSignInRequestDto,
  type UserSignUpRequestDto,
} from '~/packages/users/users.js';

import { type AsyncThunkConfig } from '~/libs/types/types.js';
import { StorageKey } from '~/libs/packages/storage/storage.js';
import { SliceName } from '~/libs/enums/enums.js';
import { HttpError } from '~/libs/packages/http/http';

const sliceName = SliceName.AUTH;

const signIn = createAsyncThunk<
  UserAuthResponse,
  UserSignInRequestDto,
  AsyncThunkConfig
>(`${sliceName}/sign-in`, async (payload, { extra }) => {
  const { authApi, storage } = extra;

  const { user, token } = await authApi.signIn(payload);

  await storage.set(StorageKey.TOKEN, token);

  return user;
});

const signUp = createAsyncThunk<
  UserAuthResponse,
  UserSignUpRequestDto,
  AsyncThunkConfig
>(`${SliceName.AUTH}/sign-up`, async (payload, { extra }) => {
  const { authApi, storage } = extra;

  const { user, token } = await authApi.signUp(payload);

  await storage.set(StorageKey.TOKEN, token);

  return user;
});

const getCurrentUser = createAsyncThunk<
  UserAuthResponse,
  undefined,
  AsyncThunkConfig
>(`${sliceName}/get-current`, async (_, { extra, rejectWithValue }) => {
  const { authApi } = extra;

  try {
    return await authApi.getCurrent();
  } catch (error) {
    if (error instanceof HttpError) {
      return rejectWithValue({
        message: error.message,
        status: error.status,
      });
    }

    return rejectWithValue({
      message: 'Error',
    });
  }
});

const signOut = createAsyncThunk<void, undefined, AsyncThunkConfig>(
  `${SliceName.AUTH}/sign-out`,
  async (_, { extra }) => {
    const { storage } = extra;

    return void storage.drop(StorageKey.TOKEN);
  },
);

export { signIn, signUp, signOut, getCurrentUser };
