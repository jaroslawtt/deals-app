import { type UserSignUpRequestDto } from '~/packages/users/users.js';

const DEFAULT_SIGN_UP_PAYLOAD: UserSignUpRequestDto = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
};

export { DEFAULT_SIGN_UP_PAYLOAD };
