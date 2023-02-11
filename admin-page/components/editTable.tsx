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
  id: 'name' | 'brand' | 'stock' | 'size' | 'density';
  label: string;
  minWidth?: number;
  align?: 'right';
  format?: (value: number) => string;
}

const columns: readonly Column[] = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'brand', label: 'Brand', minWidth: 100 },
  {
    id: 'stock',
    label: 'Stock',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Sizes',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: '',
    minWidth: 170,
    align: 'right',
    format: (value: number) => value.toFixed(2),
  },
];

interface Data {
  name: string;
  brand: string;
  stock: number;
  size: number;
  density: number;
}

function createData(
  name: string,
  brand: string,
  stock: number,
  size: number,
  density: number,
): Data {
  return { name, brand, stock, size, density };
}

const rows = [
  createData('Remera roja', 'Banana Republic', 8, 6, 1342),
  createData('Pantalon negro', 'Zara', 5, 4, 4355),
  createData('Remera negra', 'IT', 10, 2, 2345),
  createData('Remera azul', 'IT', 2, 5, 3456),
  createData('Pantalon blanco', 'Zara', 5, 6, 23465),
  createData('Australia', 'Banana Republic', 3, 2, 2345),
 
];

export default function EditTable() {

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
            {rows.map((row, i) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={i}>
                    {columns.map((column, i) => {
                      const value = row[column.id];
                      return (
                        <StyledTableCell key={i} align={column.align}>
                          {column.id === 'density' ? (<Link href={`/edit/${value}`}><EditIcon/></Link>): (<>
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