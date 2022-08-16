import { useEffect, useState } from "react";
import { api } from "../../config/axios";
import { useWeb3 } from "../../context/web3Context";
import { TransactionDataProps } from "../../types/api";
import { ConnectWallet } from "../ConnectWallet";
import { Profile } from "../Profile";
import { Transactions } from "../Transactions";
import * as S from "./styles";

const Homepage = () => {
  const { account } = useWeb3();
  const [txData, setTxData] = useState<TransactionDataProps | any>();

  useEffect(() => {
    const handleGetData = async () => {
      const { data } = await api.get(
        `api?module=account&action=txlist&address=${account}&startblock=0&endblock=99999999&sort=desc&apikey=${process.env.NEXT_PUBLIC_API_ETHERSCAN}`
      );
      setTxData(data);
    };
    if (account) {
      handleGetData();
    }
  }, [account]);

  return (
    <S.Container>
      {account ? (
        <>
          <Profile />
          <S.Title>Transactions history</S.Title>
          <Transactions data={txData} />
        </>
      ) : (
        <ConnectWallet />
      )}
    </S.Container>
  );
};

export default Homepage;
