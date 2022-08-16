import { BiWallet } from "react-icons/bi";
import { useWeb3 } from "../../context/web3Context";
import * as S from "./styles";

export const ConnectWallet = () => {
  const { connect } = useWeb3();

  return (
    <S.Container>
      <S.Title>Connect your wallet</S.Title>
      <S.Text>Please, connect your wallet to continue.</S.Text>
      <S.Button onClick={connect}>
        Connect Wallet
        <BiWallet size={25} />
      </S.Button>
    </S.Container>
  );
};
