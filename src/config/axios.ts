import Axios from "axios";

export const api = Axios.create({
  baseURL: "https://api-rinkeby.etherscan.io/",
  timeout: 1000,
});
