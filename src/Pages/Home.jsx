import React from "react";
import Search from "../components/Search/Search";
import LastRead from "../components/Lastread/LastRead";
import SurahFilter from "../components/Allsurah/SurahFilter";
import { Outlet } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Search />
      <LastRead />
      <SurahFilter />
      <Outlet />
    </>
  );
};

export default Home;
