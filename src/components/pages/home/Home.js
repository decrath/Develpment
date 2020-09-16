import React, { Component } from "react";
import { Table, TableBody, TableCell, TableContainer, TableRow, TableHead } from "@material-ui/core";
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div>
        <TableContainer>
          <Table className="table">
            <TableHead>
              <TableRow>
                <TableCell>Código</TableCell>
                <TableCell>Descripción</TableCell>
                <TableCell>Borrable</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filas.map((fila) => (
                <TableRow key={fila.id}>
                  <TableCell>{fila.code}</TableCell>
                  <TableCell>{fila.description}</TableCell>
                  <TableCell>{fila.borrador}</TableCell>
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

const filas = [
  createData(1, "Depoda", "Sistema Operacional DEPOCARGO modalidad PDA", 12),
  createData(2, "Depoda", "Sistema Operacional DEPOCARGO modalidad PDA", 25),
  createData(3, "Depoda", "Sistema Operacional DEPOCARGO modalidad PDA", 30),
];



export default Home;
