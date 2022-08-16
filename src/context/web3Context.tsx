import { createContext, useContext, useEffect, useMemo, useState } from "react";
import Web3 from "web3";
import detectEthereumProvider from "@metamask/detect-provider";

import { toast } from "react-toastify";

type Props = {
  children: React.ReactNode;
};

type Web3Props = {
  web3: Web3 | null;
  provider: unknown | any;
  isLoading: boolean;
  connect?: () => void;
  isConnected?: boolean;
  account: string;
};

const Web3Context = createContext<Web3Props>({
  provider: null,
  web3: null,
  isLoading: true,
  account: "",
});

const Web3Provider = ({ children }: Props) => {
  const [web3Api, setWeb3Api] = useState<Web3Props>({
    provider: null,
    web3: null,
    isLoading: true,
    account: "",
    isConnected: false,
  });

  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const loadProvider = async () => {
      const provider = await detectEthereumProvider();

      if (provider) {
        const web3 = new Web3(provider as string);

        const accounts = await web3?.eth.getAccounts();

        const chainId = await web3.eth.getChainId();

        if (chainId !== 4) {
          return toast.error("Change network to Rinkeby");
        }

        return setWeb3Api({
          provider,
          web3,
          isLoading: false,
          account: accounts[0],
        });
      }

      setWeb3Api((api) => ({ ...api, isLoading: false }));
    };
    loadProvider();
  }, [isConnected]);

  const _web3Api = useMemo(() => {
    return {
      ...web3Api,
      connect: web3Api.provider
        ? async () => {
            try {
              await web3Api.provider.request({
                method: "eth_requestAccounts",
              });
              setIsConnected(true);
            } catch (e: any) {
              toast.error(e.message);
            }
          }
        : () => {
            toast.error("Please install Metamask!!");
          },
    };
  }, [web3Api]);

  return (
    <Web3Context.Provider value={_web3Api}>{children}</Web3Context.Provider>
  );
};

export const useWeb3 = () => {
  return useContext(Web3Context);
};

export default Web3Provider;
