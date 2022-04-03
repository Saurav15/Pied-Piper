import Dashboard from "../../asset/Dashboard.webp";
const Chart = () => (
  <>
    <div className="container">
      <div className="d-flex align-items-center justify-content-center">
        <img src={Dashboard} alt="" className="w-50" />
      </div>
      <div className="text-center pb-5">
        <h3 style={{ color: "#0c4c67" }}>Management Simplify</h3>

        <h6 style={{ color: "#00A0E2" }}>
          Administration between team mambers and projects made easier.{" "}
        </h6>
      </div>
    </div>
  </>
);

export default Chart;
