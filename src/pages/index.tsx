import type { NextPage } from "next";
import { HomeBanner } from "../components/HomeBanner";
import { Carousel } from "../components/Carousel";
import { TravelTypes } from "../components/TravelTypes";

const Home: NextPage = () => {
  return (
    <>
      <HomeBanner />
      <TravelTypes />
      <Carousel />
    </>
  );
};

export default Home;
