import {
  ModelInit,
  MutableModel,
  PersistentModelConstructor,
} from '@aws-amplify/datastore';

type AllCoinsMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type CoinDataMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type CoinMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

type WalletMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
};

export declare class AllCoins {
  readonly id: string;
  readonly CoinData?: (CoinData | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<AllCoins, AllCoinsMetaData>);
  static copyOf(
    source: AllCoins,
    mutator: (
      draft: MutableModel<AllCoins, AllCoinsMetaData>
    ) => MutableModel<AllCoins, AllCoinsMetaData> | void
  ): AllCoins;
}

export declare class CoinData {
  readonly id: string;
  readonly coinname?: string | null;
  readonly coinvalue?: string | null;
  readonly updates?: string | null;
  readonly allcoinsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<CoinData, CoinDataMetaData>);
  static copyOf(
    source: CoinData,
    mutator: (
      draft: MutableModel<CoinData, CoinDataMetaData>
    ) => MutableModel<CoinData, CoinDataMetaData> | void
  ): CoinData;
}

export declare class Coin {
  readonly id: string;
  readonly coinname?: string | null;
  readonly coinamount?: number | null;
  readonly coinowned?: boolean | null;
  readonly walletID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Coin, CoinMetaData>);
  static copyOf(
    source: Coin,
    mutator: (
      draft: MutableModel<Coin, CoinMetaData>
    ) => MutableModel<Coin, CoinMetaData> | void
  ): Coin;
}

export declare class Wallet {
  readonly id: string;
  readonly username?: string | null;
  readonly updated?: string | null;
  readonly Coins?: (Coin | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Wallet, WalletMetaData>);
  static copyOf(
    source: Wallet,
    mutator: (
      draft: MutableModel<Wallet, WalletMetaData>
    ) => MutableModel<Wallet, WalletMetaData> | void
  ): Wallet;
}
