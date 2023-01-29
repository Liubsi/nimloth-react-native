import { ModelInit, MutableModel } from '@aws-amplify/datastore';
// @ts-ignore
import {
  LazyLoading,
  LazyLoadingDisabled,
  AsyncCollection,
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

type EagerAllCoins = {
  readonly id: string;
  readonly CoinData?: (CoinData | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyAllCoins = {
  readonly id: string;
  readonly CoinData: AsyncCollection<CoinData>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type AllCoins = LazyLoading extends LazyLoadingDisabled
  ? EagerAllCoins
  : LazyAllCoins;

export declare const AllCoins: (new (
  init: ModelInit<AllCoins, AllCoinsMetaData>
) => AllCoins) & {
  copyOf(
    source: AllCoins,
    mutator: (
      draft: MutableModel<AllCoins, AllCoinsMetaData>
    ) => MutableModel<AllCoins, AllCoinsMetaData> | void
  ): AllCoins;
};

type EagerCoinData = {
  readonly id: string;
  readonly coinname?: string | null;
  readonly coinvalue?: string | null;
  readonly updates?: string | null;
  readonly allcoinsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyCoinData = {
  readonly id: string;
  readonly coinname?: string | null;
  readonly coinvalue?: string | null;
  readonly updates?: string | null;
  readonly allcoinsID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type CoinData = LazyLoading extends LazyLoadingDisabled
  ? EagerCoinData
  : LazyCoinData;

export declare const CoinData: (new (
  init: ModelInit<CoinData, CoinDataMetaData>
) => CoinData) & {
  copyOf(
    source: CoinData,
    mutator: (
      draft: MutableModel<CoinData, CoinDataMetaData>
    ) => MutableModel<CoinData, CoinDataMetaData> | void
  ): CoinData;
};

type EagerCoin = {
  readonly id: string;
  readonly coinname?: string | null;
  readonly coinamount?: number | null;
  readonly coinowned?: boolean | null;
  readonly walletID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyCoin = {
  readonly id: string;
  readonly coinname?: string | null;
  readonly coinamount?: number | null;
  readonly coinowned?: boolean | null;
  readonly walletID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Coin = LazyLoading extends LazyLoadingDisabled
  ? EagerCoin
  : LazyCoin;

export declare const Coin: (new (
  init: ModelInit<Coin, CoinMetaData>
) => Coin) & {
  copyOf(
    source: Coin,
    mutator: (
      draft: MutableModel<Coin, CoinMetaData>
    ) => MutableModel<Coin, CoinMetaData> | void
  ): Coin;
};

type EagerWallet = {
  readonly id: string;
  readonly username?: string | null;
  readonly updated?: string | null;
  readonly Coins?: (Coin | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyWallet = {
  readonly id: string;
  readonly username?: string | null;
  readonly updated?: string | null;
  readonly Coins: AsyncCollection<Coin>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Wallet = LazyLoading extends LazyLoadingDisabled
  ? EagerWallet
  : LazyWallet;

export declare const Wallet: (new (
  init: ModelInit<Wallet, WalletMetaData>
) => Wallet) & {
  copyOf(
    source: Wallet,
    mutator: (
      draft: MutableModel<Wallet, WalletMetaData>
    ) => MutableModel<Wallet, WalletMetaData> | void
  ): Wallet;
};
