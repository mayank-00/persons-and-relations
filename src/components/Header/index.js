import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';

import { HEADER } from "../../router/constants"
import { useNavigate } from "react-router-dom"

const Header = () => {

  const navigate = useNavigate()

  const handlePageClick = (pageName) => {
    const page = HEADER.find(page => page.name === pageName)
    navigate(page.path)
  }

  return (
    <header>
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {HEADER.map((page) => (
                <Button
                  key={page.name}
                  onClick={() => handlePageClick(page.name)}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </header>
  );
};
export default Header;
