import * as S from "./styles";
import { FaEthereum } from "react-icons/fa";
import { useWeb3 } from "../../context/web3Context";
import { BiWallet } from "react-icons/bi";

const Header = () => {
  const { connect, account } = useWeb3();

  return (
    <S.Container>
      <S.Wrapper>
        <S.Logo>
          <FaEthereum />
          EthTrade
        </S.Logo>
        <S.Divider />
        <S.Title>Send ETH's</S.Title>
      </S.Wrapper>
      <S.Button isConnected={!!account} onClick={connect}>
        <p>{account ? account : "Connect Wallet"}</p>
        <BiWallet size={25} />
      </S.Button>
    </S.Container>
  );
};

export default Header;
