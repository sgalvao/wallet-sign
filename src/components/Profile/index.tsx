import { useEffect, useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { useWeb3 } from "../../context/web3Context";
import { useSendEth } from "../../hooks/useSendValue";
import { SendModal } from "../SendModal";
import * as S from "./styles";

export const Profile = () => {
  const { web3, account } = useWeb3();
  const [balance, setBalance] = useState("0");
  const [isOpen, setIsOpen] = useState(false);
  const { sendEth } = useSendEth();

  useEffect(() => {
    getBalance();
  }, [web3]);

  const getBalance = async () => {
    const value = web3?.utils.fromWei(await web3.eth.getBalance(account));
    setBalance(Number(value).toFixed(7));
  };

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <S.Container>
        <S.Title>Balance:{balance}</S.Title>
        <S.Button onClick={() => setIsOpen(true)}>
          Send ETH <FaEthereum />
        </S.Button>
      </S.Container>
      <SendModal isOpen={isOpen} onClose={handleClose} onSubmit={sendEth} />
    </>
  );
};
