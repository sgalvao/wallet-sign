import type { AppProps } from "next/app";
import GlobalStyle from "../../styles/global";
import Web3Provider from "../context/web3Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import SafeProvider from "@gnosis.pm/safe-apps-react-sdk";

function NftFaucetApp({ Component, pageProps }: AppProps) {
  return (
    <SafeProvider>
      <GlobalStyle />
      <Web3Provider>
        <Component {...pageProps} />
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </Web3Provider>
    </SafeProvider>
  );
}

export default NftFaucetApp;
