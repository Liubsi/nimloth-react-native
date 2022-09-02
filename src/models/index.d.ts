import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from '@aws-amplify/datastore';

type TodoMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

export declare class Todo {
  readonly id: string;
  readonly email: string;
  readonly password?: string | null;
  readonly name?: string | null;
  readonly birthdate?: string | null;
  readonly phone_number?: string | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Todo, TodoMetaData>);
  static copyOf(
    source: Todo,
    mutator: (
      draft: MutableModel<Todo, TodoMetaData>
    ) => MutableModel<Todo, TodoMetaData> | void
  ): Todo;
}
