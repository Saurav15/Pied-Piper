import * as React from "react";
import { Form, InputGroup, FormControl } from "react-bootstrap";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { FormControlLabel, Checkbox } from "@mui/material";
export default function TemporaryDrawer({ handleFilter }) {
  const status = ["Free", "Assigned", "Partially Assigned"];
  const skills = [
    {
      name: "Java",
    },
    {
      name: "React",
    },
    {
      name: "Node",
    },
    {
      name: "Veu",
    },
  ];
  const [state, setState] = React.useState([]);
  const [applyStatus, setApplyStatus] = React.useState("");
  const [filter, setFilter] = React.useState([]);
  const [Exp, setExp] = React.useState("");
  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    setApplyStatus(name);
  };
  const handleSkills = (event) => {
    const target = event.target;
    const value = target.type === "checkbox" ? "Beginner" : target.value;
    const name = target.name;
    setFilter({
      skills: { name: name },
      ...filter,
    });
  };
  const handleLevel = (skill, level) => {
    setFilter({
      ...filter,
      level: level,
    });
  };
  const getFilters = {
    filter,
    exp: Exp,
    projectstatus: applyStatus,
  };
  const toggleDrawer = (anchor, open) => (event) => {
    if (event.key === "Tab" || event.key === "Shift") {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const applyFilter = () => {
    handleFilter(getFilters);
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 300 }}
      role="presentation"
    >
      <List>
        <ListItem button>
          <ListItemText primary="Skills" />
          <ListItemText />
        </ListItem>
        <Divider />
        <div className="pl-3">
          <ListItemText primary="Project Status" />
          {status.map((item) => (
            <FormControlLabel
              onClick={handleChange}
              control={<Checkbox color="primary" />}
              label={item}
              value={item}
              name={item}
            />
          ))}
          <ListItemText />
        </div>
        <Divider />
        <div className="pl-3">
          <ListItemText primary="Stack" />
          {skills.map((el) => (
            <div className="d-flex align-items-center">
              <FormControlLabel
                onClick={handleSkills}
                control={<Checkbox color="primary" />}
                label={el.name}
                value={el.name}
                name={el.name}
              />
              <Form.Select
                size="sm"
                onClick={(d) => handleLevel(el.name, d.target.value)}
              >
                <option> Beginner</option>
                <option>Intermediate</option>
                <option>Advance</option>
              </Form.Select>
            </div>
          ))}
          <ListItemText />
        </div>
        <Divider />
        <div className="pl-3">
          <ListItemText primary="Experience in years" />
          <InputGroup
            className="mb-3 container"
            value="number"
            onChange={(e) => setExp(e.target.value)}
          >
            <FormControl aria-label="Experience in years" />
          </InputGroup>
        </div>
      </List>
    </Box>
  );

  return (
    <div>
      <React.Fragment key={"right"}>
        <Button onClick={toggleDrawer("right", true)}>
          <i class="fas fa-filter" style={{ fontSize: "1.5rem" }}></i>
        </Button>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
          <Button className="btn" onClick={applyFilter}>
            Apply Filter
          </Button>
        </Drawer>
      </React.Fragment>
    </div>
  );
}
