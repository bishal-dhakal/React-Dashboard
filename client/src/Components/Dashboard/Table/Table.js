import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import "./Table.css";

function createData(name,trackingId,date,status) {
  return { name,trackingId,date,status };
}

const rows = [
  createData('MO:MO', 109823,'2 July 2022', 'Approved'),
  createData('MO:MO', 109823,'2 July 2022', 'Approved'),
  createData('MO:MO', 109823,'2 July 2022', 'Pending'),
  createData('MO:MO', 109823,'2 July 2022', 'Delivered'),
  createData('MO:MO', 109823,'2 July 2022', 'Approved'),
  createData('MO:MO', 109823,'2 July 2022', 'Approved'),
  createData('MO:MO', 109823,'2 July 2022', 'Pending'),
];

 const makeStyles =(status) =>{
    if(status === 'Approved')
    {
        return {
            background :'rgb(145 254 159 / 47%',
            color :'green'
        }

    }
    else if( status === 'Pending'){
        return{
            background: '#ffadad8f',
            color: 'red',
        }
    }
    else{
        return{
            background:'#59bfff',
            color: 'white',
        }
    }
}

export default function BasicTable() {
  return (
    <div className='flex flex-col gap-5 '>
        <h3 className='font-bold'>Recent Orders</h3>
    
    <TableContainer component={Paper} className='shadow-indigo-400' >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Products</TableCell>
            <TableCell align="left">Tracking Id</TableCell>
            <TableCell align="left">Date</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="left"> </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="left">{row.trackingId}</TableCell>
              <TableCell align="left">{row.date}</TableCell>
              <TableCell align="left">
                <span className='status' style={makeStyles(row.status)}>
                    {row.status}
                </span>
                {/* {row.status} */}
              </TableCell>
              <TableCell align="left" className='Details'>Details</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}
