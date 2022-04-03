import React from "react";
import Table from "./Table";
import Footer from "../Footer";
import Header from "../header/index";
import Chart from "./chart";
function Dashboard() {
  return (
    <>
      <Header />
      <Chart />
      <div className="container">
        <Table />
      </div>
      <Footer />
    </>
  );
}

export default Dashboard;
