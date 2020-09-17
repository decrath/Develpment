import React, { Component } from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead, Paper } from "@material-ui/core";

class Home extends Component {
    
  render() {
    return (
      <div>
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Borrable</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.code}</TableCell>
                  <TableCell>{row.description}</TableCell>
                  <TableCell>{row.borrador}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

function createData(id, code, description, borrador) {
  return { id, code, description, borrador };
}

const rows = [
  createData(1, "Depoda", "Sistema Operacional DEPOCARGO modalidad PDA", 12),
  createData(2, "Depoda", "Sistema Operacional DEPOCARGO modalidad PDA", 25),
  createData(3, "Depoda", "Sistema Operacional DEPOCARGO modalidad PDA", 30),
];



export default Home;
