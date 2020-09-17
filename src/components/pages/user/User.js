import React, { Component } from "react";
import { TableContainer, Table, TableHead, TableRow,TableCell, TableBody, Paper } from "@material-ui/core";

class User extends Component {
  render() {
    return (
      <div className="">
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
                <TableRow>
                  <TableCell>user name</TableCell>
                  <TableCell>full name </TableCell>
                  <TableCell>activated</TableCell>
                </TableRow>    
            </TableHead>
            <TableBody>
              {rows.map((row) => (
                  <TableRow key={row.id}>
                    <TableCell>{row.userName}</TableCell>
                    <TableCell>{row.fullName}</TableCell>
                    <TableCell>{row.activated}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    );
  }
}

function createData(id, userName, fullName, activated) {
  return {id, userName, fullName, activated};
}

const rows = [
  createData(1, 'Victor', 'Victor eduardo', 'Yes, this guy is activated'),
  createData(2, 'Victor', 'Victor eduardo', 'Yes, this guy is activated'),
  createData(3, 'Victor', 'Victor eduardo', 'Yes, this guy is activated')
];

export default User;
