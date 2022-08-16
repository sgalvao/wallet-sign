export type TransactionDataProps = {
  data: { result: TransactionProps[] };
};

export type TransactionProps = {
  hash: string;
  blockNumber: string;
  from: string;
  to: string;
  value: string;
};
