import { toast } from "react-toastify";
import { useWeb3 } from "../context/web3Context";

export const useSendEth = () => {
  const { web3, account } = useWeb3();

  const sendEth = async (receiver: string, value: string) => {
    try {
      const toWei = web3?.utils.toWei(value, "ether");

      const txHash = await web3?.eth.sendTransaction({
        from: account,
        to: receiver,
        value: toWei,
      });
      toast.success(`Success!! NFT sended. transaction hash:${txHash}`);
    } catch (e: any) {
      toast.error(`Unexpected error 🤯 !! ${e.message}`);
    }
  };

  return {
    sendEth,
  };
};
