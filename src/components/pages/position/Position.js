import React, { Component } from "react";
import { TableContainer, Table, TableHead, TableCell, TableBody, TableRow, Paper } from "@material-ui/core";

class Position extends Component {
  render() {
    return (
      <div>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Position</TableCell>
                        <TableCell>Observation</TableCell>
                        <TableCell>Activate</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map(row => (
                        <TableRow key={row.id}>
                            <TableCell>{row.position}</TableCell>
                            <TableCell>{row.observation}</TableCell>
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

function createData(id, position, observation, activated) {
    return {id, position, observation, activated};
}

const rows = [
    createData(1, 'What is it?', 'Where is the bus station', 'Today is a good day'),
    createData(2, 'What is it?', 'Where is the bus station', 'Today is a good day'),
    createData(3, 'What is it?', 'Where is the bus station', 'Today is a good day'),
    createData(4, 'What is it?', 'Where is the bus station', 'Today is a good day'),
];

export default Position;
