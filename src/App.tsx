import './App.css'
import Sidebar from './components/Sidebar.tsx';
import Table from './components/Table.tsx';
import { Box } from '@mui/material';
import { Header } from './components/Header.tsx';
import { useState } from 'react';
import { Popup } from './components/Modal.tsx';

function App() {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <Box display='flex' alignItems='flex-start'>
      <Sidebar />
      <Box display='flex' flexDirection='column' marginLeft='300px'>
        <Header handleOpen={handleOpen} />
        <Table />
        <Popup open={open} handleClose={handleClose} />
      </Box>
    </Box>
  )
}

export default App
