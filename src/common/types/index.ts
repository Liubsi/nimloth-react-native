export type FriendProps = {
  firstName: string;
  lastName: string;
  id: string;
};

export type CoinProps = {
  id: string;
  coinName: string;
  dollarAmount: number;
  ownedAmount: number;
};

export type HistoryProps = {
  type: string;
  time: string;
  coin: string;
  amount: string;
  recipient?: string;
  id: string;
};

export type DatumProps = HistoryProps | CoinProps | FriendProps;
