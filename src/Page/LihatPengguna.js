import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function LihatPengguna() {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    fetch("https://gorest.co.in/public/v2/posts")
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

  return (
    <div className="lihatPengguna">
      <header></header>
      <Box style={{ marginLeft: 30 }}>
        <p>LIHAT PENGGUNA</p>
        <p>NAMA</p>
        <p>GENDER</p>
        <p>EMAIL</p>
        <Grid container spacing={2}>
          <Grid xs={4}>
            <p>Daftar Post</p>
          </Grid>
          <Grid xs={8}>
            <Button variant="contained" style={{ Color: "white" }}>
              <Link to="/buatPost">Buat Post</Link>
            </Button>
          </Grid>
        </Grid>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Body</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow
                  key={row.id}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.body}</TableCell>
                  <TableCell>{deleteIcon}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
    </div>
  );
}
