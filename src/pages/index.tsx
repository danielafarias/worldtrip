import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { TravelTypes } from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <TravelTypes />
    </>
  );
};

export default Home;
