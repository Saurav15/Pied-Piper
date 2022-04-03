import { Link } from "react-router-dom";
import { PieChart } from "react-minimal-pie-chart";
import css from "./chart.module.css";
const Chart = () => (
  <>
    <div className="container">
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
    </div>
  </>
);

export default Chart;
