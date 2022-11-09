import * as React from "react";
import { Link } from "react-router-dom";
// import { useTheme } from '@mui/material/styles';
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

//Material Icons Import
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import VisibilityIcon from "@mui/icons-material/Visibility";
import UpdateIcon from "@mui/icons-material/Update";

export function DashboardPengguna() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://gorest.co.in/public/v2/users")
      .then((res) => res.json())
      .then((res) => {
        setData(res);
      });
  }, []);

  const deleteIcon = (
    <IconButton onClick={console.log("delete")}>
      <DeleteIcon color="secondary" />
    </IconButton>
  );
  const viewIcon = (
    <IconButton>
      <Link to="/lihatPengguna">
        <VisibilityIcon color="secondary" />
      </Link>
    </IconButton>
  );

  const updateIcon = (
    <IconButton>
      <UpdateIcon color="secondary" />
    </IconButton>
  );
  <Button variant="contained">
    <Link to="/lihatPengguna">View</Link>
  </Button>;
  return (
    <>
      <div className="App">
        <header></header>
        <p style={{ marginTop: 30 }}>DAFTAR PENGGUNA</p>
        <div>
          <Button
            variant="contained"
            style={{ marginTop: 30, alignItems: "right" }}
          >
            <Link to="/buatPengguna">Buat Pengguna</Link>
          </Button>
        </div>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Email</TableCell>
                <TableCell>Gender</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.gender}</TableCell>
                  <TableCell>{row.status}</TableCell>
                  <TableCell>{viewIcon}</TableCell>
                  <TableCell>{updateIcon}</TableCell>
                  <TableCell>{deleteIcon}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </>
  );
}

// export default dashboardPengguna;
