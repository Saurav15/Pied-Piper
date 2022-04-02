import { PieChart } from "react-minimal-pie-chart";
import css from "./chart.module.css";
import Table from "./Table";
const Chart = () => (
  <>
    <div className={css["cards-div"]}>
      <div className={css["custom-card"]} style={{ color: "white " }}>
        <PieChart
          label={({ dataEntry }) => `${Math.round(dataEntry.percentage)}%`}
          data={[
            { title: "One", value: 20, color: "lightblue" },
            { title: "Two", value: 15, color: "orange" },
            { title: "Three", value: 20, color: "lightgreen" },
          ]}
        />
      </div>
      <div className={css["custom-card"]}>
        <div className={css["profile_name"]}>Employee numbers:</div>
      </div>
      <div className={css["custom-card"]}>
        <div className={css["profile_name"]}>Available Employees:</div>
      </div>
    </div>
    <div className="container mt-3">
      <Table />
    </div>
  </>
);

export default Chart;
