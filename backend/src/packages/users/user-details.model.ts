import { Model, RelationMappings } from 'objection';
import {
  AbstractModel,
  DatabaseTableName,
  getJoinRelationPath,
} from '~/libs/packages/database/database.js';
import { UserModel } from '~/packages/users/users.js';

class UserDetailsModel extends AbstractModel {
  public 'id': number;

  public 'userId': number;

  public 'firstName': string;

  public 'lastName': string;

  public static override get tableName(): string {
    return DatabaseTableName.USER_DETAILS;
  }

  public static override get relationMappings(): RelationMappings {
    return {
      user: {
        relation: Model.HasOneRelation,
        modelClass: UserModel,
        join: {
          from: getJoinRelationPath<UserDetailsModel>(
            DatabaseTableName.USER_DETAILS,
            'userId',
          ),
          to: getJoinRelationPath<UserModel>(DatabaseTableName.USERS, 'id'),
        },
      },
    };
  }
}

export { UserDetailsModel };
