import { IService } from '~/libs/interfaces/service.interface.js';
import { UserRepository } from '~/packages/users/user.repository.js';
import {
  type UserAuthResponse,
  UserEntity,
  type UserSignUpRequestDto,
} from '~/packages/users/users.js';
import { IConfig } from '~/libs/packages/config/libs/interfaces/config.interface.js';
import { IEncrypt } from '~/libs/packages/encrypt/libs/interfaces/encrypt.interface.js';

class UserService implements Pick<IService, 'create'> {
  private readonly config: IConfig;
  private readonly encrypt: IEncrypt;

  private readonly userRepository: UserRepository;
  public constructor(
    userRepository: UserRepository,
    config: IConfig,
    encrypt: IEncrypt,
  ) {
    this.userRepository = userRepository;
    this.config = config;
    this.encrypt = encrypt;
  }

  async create(payload: UserSignUpRequestDto): Promise<UserAuthResponse> {
    const { email, password, firstName, lastName } = payload;

    const passwordSalt = await this.encrypt.generateSalt(
      this.config.ENCRYPTION.USER_PASSWORD_SALT_ROUNDS,
    );
    const passwordHash = await this.encrypt.encrypt(
      payload.password,
      passwordSalt,
    );

    const user = await this.userRepository.create(
      UserEntity.initializeNew({
        email,
        firstName,
        lastName,
        passwordSalt,
        passwordHash,
      }),
    );

    return user.toObject();
  }

  async find(payload: number): Promise<UserAuthResponse | null> {
    const user = await this.userRepository.find(payload);

    if (!user) return null;

    return user.toObject();
  }

  async findByEmail(email: string) {
    return this.userRepository.findByEmail(email);
  }

  async findPrivateData(id: number) {
    const user = await this.userRepository.find(id);

    if (!user) return null;

    return user.privateData;
  }
}

export { UserService };