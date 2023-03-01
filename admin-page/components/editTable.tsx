import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: "rgb(0, 0, 0)",
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

interface Column {
  id: 'name' | 'brand' | 'stock' | 'price' | 'id';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'brand', label: 'Brand', minWidth: 100 },
  {
    id: 'price',
    label: 'Stock',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'price',
    label: 'Price',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'id',
    label: '',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

export default function EditTable({products}:any) {

  console.log(products)

  return (
    <Paper sx={{ width: '85%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: '725px' }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, i) => (
                <StyledTableCell
                  key={i}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </StyledTableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {products.map((product:any, i:number) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column:any, i) => {
                      let value
                      if(column.id === 'brand'){
                        value = product.brand.name;
                      }else{
                        value = product[column.id];
                      }
                      return (
                        <StyledTableCell key={i} align={column.align}>
                          {column.id === 'id' ? (<Link href={`/edit/${value}`}><EditIcon/></Link>): (<>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}</>)}
                        </StyledTableCell>
                      );
                    })}
                  </StyledTableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
