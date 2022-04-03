import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

import axios from "axios";

const baseUrl = "https://1ca0-14-99-102-226.ngrok.io/api/developer";
function Row(props) {
  const [level, setLevel] = React.useState("");
  const handleChange = (event) => {
    setLevel(event.target.value);
  };
  const { row } = props;
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right" className="text-capitalize">
          {row.stack}
        </TableCell>
        <TableCell align="right">{row.experience}</TableCell>
        <TableCell align="right" className="text-capitalize">
          {row.projectStatus}
        </TableCell>
        <TableCell align="right">{row.protein}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography
                variant="h6"
                className="font-weight-bold"
                gutterBottom
                component="div"
              >
                Skills
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell className="font-weight-bold">Name</TableCell>
                    <TableCell className="font-weight-bold">
                      Skill Metrics
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.skills.map((el) => (
                    <TableRow key={el._id}>
                      <TableCell
                        component="th"
                        className="text-capitalize"
                        scope="row"
                      >
                        {el.name}
                      </TableCell>
                      <TableCell className="text-capitalize">
                        {el.level}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

function CollapsibleTable() {
  const [error, setError] = React.useState(null);
  const [isLoaded, setIsLoaded] = React.useState(false);
  const [items, setItems] = React.useState([]);
  //getting tasks
  React.useEffect(() => {
    axios
      .get(baseUrl)
      .then(function (response) {
        // handle success
        setIsLoaded(true);
        setItems(response.data);
      })
      .catch(function (error) {
        // handle error
        setIsLoaded(true);
        setError(error);
      });

    return () => {
      setItems([]);
    };
  }, []);
  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Developer Name</TableCell>
            <TableCell align="right">Stack</TableCell>
            <TableCell align="right">Experience (in years)</TableCell>
            <TableCell align="right">Assigned to project</TableCell>
            <TableCell align="right">Availability</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map((row) => (
            <Row key={row.name} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default CollapsibleTable;
