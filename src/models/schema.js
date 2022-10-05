export const schema = {
  models: {
    UserSignupData: {
      name: 'UserSignupData',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        email: {
          name: 'email',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        password: {
          name: 'password',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        phone_number: {
          name: 'phone_number',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        birthdate: {
          name: 'birthdate',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        name: {
          name: 'name',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        Friends: {
          name: 'Friends',
          isArray: true,
          type: 'String',
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'UserSignupData',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  version: '5364ef4c266f606e5c1490e882f40e07',
};
