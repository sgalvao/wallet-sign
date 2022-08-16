import Axios from "axios";

export const api = Axios.create({
  baseURL: "http://api-rinkeby.etherscan.io/",
  timeout: 1000,
});
