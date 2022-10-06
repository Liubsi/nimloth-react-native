// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { AllCoins, CoinData, Coin, Wallet } = initSchema(schema);

export {
  AllCoins,
  CoinData,
  Coin,
  Wallet
};