import { UserEntity, UserModel } from '~/packages/users/users.js';
import { IRepository } from '~/libs/interfaces/repository.interface.js';

class UserRepository implements Pick<IRepository, 'create' | 'find'> {
  private readonly defaultRelationExpression = 'userDetails';
  private readonly userModel: typeof UserModel;
  public constructor(userModel: typeof UserModel) {
    this.userModel = userModel;
  }

  async create(payload: UserEntity): Promise<UserEntity> {
    const { email, firstName, lastName, passwordSalt, passwordHash } =
      payload.toNewObject();

    const user = await this.userModel
      .query()
      .insertGraphAndFetch({
        email,
        passwordSalt,
        passwordHash,
        userDetails: {
          firstName,
          lastName,
        },
      })
      .withGraphFetched(this.defaultRelationExpression)
      .execute();

    return UserEntity.initialize({
      id: user.id,
      email: user.email,
      firstName: user.userDetails.firstName,
      lastName: user.userDetails.lastName,
      passwordSalt: user.passwordSalt,
      passwordHash: user.passwordHash,
    });
  }

  async find(id: number): Promise<UserEntity | null> {
    const user = await this.userModel
      .query()
      .findById(id)
      .withGraphFetched(this.defaultRelationExpression)
      .execute();

    if (!user) return null;

    return UserEntity.initialize({
      id: user.id,
      email: user.email,
      firstName: user.userDetails.firstName,
      lastName: user.userDetails.lastName,
      passwordSalt: user.passwordSalt,
      passwordHash: user.passwordHash,
    });
  }

  async findByEmail(email: string): Promise<UserEntity | null> {
    const user = await this.userModel
      .query()
      .findOne({
        email,
      })
      .withGraphFetched(this.defaultRelationExpression)
      .execute();

    if (!user) return null;

    return UserEntity.initialize({
      id: user.id,
      email: user.email,
      firstName: user.userDetails.firstName,
      lastName: user.userDetails.lastName,
      passwordSalt: user.passwordSalt,
      passwordHash: user.passwordHash,
    });
  }
}

export { UserRepository };
