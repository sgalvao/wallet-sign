import type { NextPage } from "next";
import Homepage from "../components/Homepage";
import Base from "../templates/Base/base";

const Home: NextPage = () => {
  return (
    <Base>
      <Homepage />
    </Base>
  );
};

export default Home;
