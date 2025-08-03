import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { CgEnter } from 'react-icons/cg';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  marginLeft: 0,
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: '100% ',
    border: '2px solid #ccc',
  },
}));



const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '110%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
  },
}));

export default function SearchAppBar() {
  return (
    <Box >
      <AppBar position="static" style={{ width: '49vw',top:0,display: 'flex',flexDirection:'row',justifyContent:'space-between', padding: '7px 20px',border: '1px solid #ccc',borderRadius: '5px' }}>
        <Toolbar>
          <Search style={{ minWidth:'30vw', display: 'flex', alignItems: 'center' }}>
         
            
            
            <StyledInputBase
              placeholder="Add a new task"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        </Toolbar>
        <button
            style={{
              padding: 9,
              marginTop: 0,
              marginLeft: 40,
              maxHeight: 60,
              minWidth: 90,
              backgroundColor: "blue",
            }}
          >
            +Add
          </button>
      </AppBar>
    </Box>
  );
}
