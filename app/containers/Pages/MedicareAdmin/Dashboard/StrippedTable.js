import React, { Fragment } from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import useStyles from 'enl-components/Tables/tableStyle-jss';

let id = 0;
function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return {
    id,
    name,
    calories,
    fat,
    carbs,
    protein
  };
}

const data = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function StrippedTable(props) {
  const { classes, cx } = useStyles();
  return (
    <Fragment>
      <div className={classes.rootTable}>
        <Table className={cx(classes.table, classes.stripped)}>
          <TableHead style={{
            backgroundColor: 'rgb(37, 150, 190, .25)',
          }}>
            <TableRow>
              <TableCell style={{ fontFamily: 'Inter, sans-serif' }}>Active User</TableCell>
              <TableCell style={{ fontFamily: 'Inter, sans-serif' }} align="center">Bot Deployed</TableCell>
              <TableCell style={{ fontFamily: 'Inter, sans-serif' }} align="center">Recent Activities</TableCell>
              <TableCell style={{ fontFamily: 'Inter, sans-serif' }} align="center">Carbs</TableCell>
              <TableCell style={{ fontFamily: 'Inter, sans-serif' }} align="center">Protein</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map(n => ([
              <TableRow key={n.id}>
                <TableCell style={{ fontFamily: 'Inter, sans-serif' }}>{n.name}</TableCell>
                <TableCell style={{ fontFamily: 'Inter, sans-serif' }} align="center">{n.calories}</TableCell>
                <TableCell style={{ fontFamily: 'Inter, sans-serif' }} align="center">{n.fat}</TableCell>
                <TableCell style={{ fontFamily: 'Inter, sans-serif' }} align="center">{n.carbs}</TableCell>
                <TableCell style={{ fontFamily: 'Inter, sans-serif' }} align="center">{n.protein}</TableCell>
              </TableRow>
            ]))}
          </TableBody>
        </Table>
      </div>
    </Fragment>
  );
}

export default StrippedTable;
