import { AbstractModel, DatabaseTableName, getJoinRelationPath } from '~/libs/packages/database/database.js';
import { Model, RelationMappings } from 'objection';
import { UserDetailsModel } from '~/packages/users/users.js';

class UserModel extends AbstractModel {
  public 'id': number;

  public 'email': string;

  public 'passwordHash': string;

  public 'passwordSalt': string;

  public 'userDetails': UserDetailsModel;

  public static override get tableName(): string {
    return DatabaseTableName.USERS;
  }

  public static override relationMappings = (): RelationMappings => ({
    userDetails: {
      relation: Model.HasOneRelation,
      modelClass: UserDetailsModel,
      join: {
        from: getJoinRelationPath<UserModel>(DatabaseTableName.USERS, 'id'),
        to: getJoinRelationPath<UserDetailsModel>(
          DatabaseTableName.USER_DETAILS,
          'userId',
        ),
      },
    },
  });
}

export { UserModel };