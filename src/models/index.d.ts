import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from '@aws-amplify/datastore';

type UserSignupDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

export declare class UserSignupData {
  readonly id: string;
  readonly email?: string | null;
  readonly password?: string | null;
  readonly phone_number?: string | null;
  readonly birthdate?: string | null;
  readonly name?: string | null;
  readonly Friends?: (string | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<UserSignupData, UserSignupDataMetaData>);
  static copyOf(
    source: UserSignupData,
    mutator: (
      draft: MutableModel<UserSignupData, UserSignupDataMetaData>
    ) => MutableModel<UserSignupData, UserSignupDataMetaData> | void
  ): UserSignupData;
}
