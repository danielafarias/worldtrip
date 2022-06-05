import type { NextPage } from "next";
import { Banner } from "../components/Banner";
import { Carousel } from "../components/Carousel";
import { TravelTypes } from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <>
      <Banner />
      <TravelTypes />
      <Carousel />
    </>
  );
};

export default Home;
