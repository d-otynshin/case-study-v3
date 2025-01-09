import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Checkbox,
} from '@mui/material';

import MoreVertIcon from '@mui/icons-material/MoreVert';

const rows = [
  { id: 1, name: 'Services', type: 'Product', units: 'Days', price: '100', vat: '123' },
  { id: 2, name: 'Services', type: 'Product', units: 'Days', price: '100', vat: '123' },
  { id: 3, name: 'Services', type: 'Product', units: 'Days', price: '100', vat: '123' },
  { id: 4, name: 'Services', type: 'Product', units: 'Days', price: '100', vat: '123' },
];

const DataTable = () => {
  return (
    <TableContainer>
      <Table sx={{ minWidth: '600px', width: 'calc(100vw - 300px)' }}>
        <TableHead>
          <TableRow>
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell>Name</TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Units</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>VAT</TableCell>
            <TableCell align="right"></TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell width={'20px'}><Checkbox /></TableCell>
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.units}</TableCell>
              <TableCell>{row.type}</TableCell>
              <TableCell>{row.price}</TableCell>
              <TableCell>{row.vat}</TableCell>
              <TableCell align="right">
                <MoreVertIcon />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default DataTable;
