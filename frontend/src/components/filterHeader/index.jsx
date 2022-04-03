import React from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import TemporaryDrawer from "../Filterdrawer/Drawer";
export const FilterHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="d-flex justify-content-between">
      <h3>Developer's List</h3>
      <div className="d-flex align-items-end">
        <Button
          className="btn btn-primary"
          onClick={() => navigate("/addemployee")}
        >
          {" "}
          Add Employee
        </Button>
        <TemporaryDrawer />
      </div>
    </div>
  );
};
