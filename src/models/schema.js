export const schema = {
  models: {
    Todo: {
      name: 'Todo',
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
          isRequired: true,
          attributes: [],
        },
        password: {
          name: 'password',
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
        birthdate: {
          name: 'birthdate',
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
      pluralName: 'Todos',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
      ],
    },
  },
  enums: {},
  nonModels: {},
  version: 'eb826d729f1089183ba686bfac2ea9d0',
};
