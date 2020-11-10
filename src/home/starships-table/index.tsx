import React from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default function StartshipsTable({ starships, value }) {
  return (
    <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Nave</TableCell>
            <TableCell align="right">Paradas</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {starships.map((starship) => (
            <TableRow key={starship.name}>
              <TableCell component="th" scope="row">
                {starship.name}
              </TableCell>
              <TableCell align="right">
                {starship.MGLT != "unknown"
                  ? Math.ceil(value / parseInt(starship.MGLT))
                  : "Desconhecido"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
