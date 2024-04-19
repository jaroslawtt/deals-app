import { UserModel } from './user.model.js';
import { UserRepository } from '~/packages/users/user.repository.js';
import { UserService } from '~/packages/users/user.service.js';
import { config } from '~/libs/packages/config/config.js';
import { encrypt } from '~/libs/packages/encrypt/encrypt.js';

const userRepository = new UserRepository(UserModel);
const userService = new UserService(userRepository, config, encrypt);

export { userService };
export {
  type UserAuthResponse,
  type UserTokenPayload,
  type UserSignInRequestDto,
  type UserSignUpResponseDto,
  type UserSignInResponseDto,
  type UserSignUpRequestDto,
  type UserGetAllItemResponseDto,
  type UserPrivateData,
} from './libs/types/types.js';
export {
  userSignUpValidationSchema,
  userSignInValidationSchema,
} from './libs/validation-schemas/validation-schemas.js';
export { UserModel } from './user.model.js';
export { UserDetailsModel } from './user-details.model.js';
export { UserEntity } from './user.entity.js';
export { UserRepository } from './user.repository.js';
export { UserService } from './user.service.js';
