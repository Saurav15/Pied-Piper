import { Outlet } from "react-router-dom";

import Header from "../header/index";

import Footer from "../Footer/index";

const MainEntry = () => {
  return (
    <>
      <Header />

      <Outlet />

      <Footer />
    </>
  );
};

export default MainEntry;
