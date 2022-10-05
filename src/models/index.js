// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';

const { UserSignupData } = initSchema(schema);

export { UserSignupData };
