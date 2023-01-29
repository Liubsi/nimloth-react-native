export const schema = {
  models: {
    AllCoins: {
      name: 'AllCoins',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        CoinData: {
          name: 'CoinData',
          isArray: true,
          type: {
            model: 'CoinData',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: 'allcoinsID',
          },
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
      pluralName: 'AllCoins',
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
              {
                allow: 'private',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                allow: 'private',
                provider: 'iam',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    CoinData: {
      name: 'CoinData',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        coinname: {
          name: 'coinname',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        coinvalue: {
          name: 'coinvalue',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        updates: {
          name: 'updates',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
        },
        allcoinsID: {
          name: 'allcoinsID',
          isArray: false,
          type: 'ID',
          isRequired: true,
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
      pluralName: 'CoinData',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'key',
          properties: {
            name: 'byAllCoins',
            fields: ['allcoinsID'],
          },
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                allow: 'private',
                provider: 'iam',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                allow: 'private',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    Coin: {
      name: 'Coin',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        coinname: {
          name: 'coinname',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        coinamount: {
          name: 'coinamount',
          isArray: false,
          type: 'Float',
          isRequired: false,
          attributes: [],
        },
        coinowned: {
          name: 'coinowned',
          isArray: false,
          type: 'Boolean',
          isRequired: false,
          attributes: [],
        },
        walletID: {
          name: 'walletID',
          isArray: false,
          type: 'ID',
          isRequired: true,
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
      pluralName: 'Coins',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'key',
          properties: {
            name: 'byWallet',
            fields: ['walletID'],
          },
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                provider: 'userPools',
                ownerField: 'owner',
                allow: 'owner',
                identityClaim: 'cognito:username',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                allow: 'private',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                allow: 'private',
                provider: 'iam',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    Wallet: {
      name: 'Wallet',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        username: {
          name: 'username',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        updated: {
          name: 'updated',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
        },
        Coins: {
          name: 'Coins',
          isArray: true,
          type: {
            model: 'Coin',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: 'walletID',
          },
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
      pluralName: 'Wallets',
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
                provider: 'userPools',
                ownerField: 'owner',
                allow: 'owner',
                identityClaim: 'cognito:username',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                allow: 'private',
                operations: ['create', 'update', 'delete', 'read'],
              },
              {
                allow: 'private',
                provider: 'iam',
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
  codegenVersion: '3.3.5',
  version: '39ce64f1e0fedcb918d6b68c1ad8213f',
};
