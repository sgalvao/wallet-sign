import Header from "../../components/Header";
import Web3Provider from "../../context/web3Context";
import * as S from "./styles";

type Props = {
  children: React.ReactNode;
};

export default function Base({ children }: Props) {
  return (
    <Web3Provider>
      <S.Container>
        <Header />
        <S.Content>{children}</S.Content>
      </S.Container>
    </Web3Provider>
  );
}
