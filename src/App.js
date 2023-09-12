import * as React from 'react';
import { Box, Tab, Tabs, Container, Paper, Button, Menu, MenuItem, Typography } from "@mui/material";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';

const OptionList = ["House", "Apartment", "Hotel", "Villa"];  

function App() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#f7f7f7',
    '&:hover': {
      backgroundColor: '#f7f7f7',
    },
    margin: '10px 0',
    padding: '5px 0',
    width: '85%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
    display: 'flex',
    flexDirection: 'row',
    
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 1.5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
  }));

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Container>
      <Box>
        <Typography sx={{ mt: 2, color: "Grey"}}>
          Location
        </Typography>
        <Button
          id="location-button"
          sx={{ color: "black", fontSize: "1.2em" }}
          aria-controls={open ? 'location-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          disableElevation
          onClick={handleClick}
          endIcon={<KeyboardArrowDownIcon />}
        >
        Jakarta
        </Button>
        <Menu
          id="location-menu"
          MenuListProps={{
            'aria-labelledby': 'location-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
        >
          <MenuItem onClick={handleClose} disableRipple>
            California
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            New York
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            London
          </MenuItem>
          <MenuItem onClick={handleClose} disableRipple>
            New Mexico
          </MenuItem>
        </Menu>
      </Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search address, or near you"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Box>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          TabIndicatorProps={{ style: { display: 'none' } }}
        >
          <Tab label="House" style={{color: value === 0 ? "#ffffff" : "#858585", backgroundColor: value === 0 ? '#73c3f1' : '#f7f7f7', borderRadius: '12px', margin: '0 5px'}} />
          <Tab label="Apartment" style={{color: value === 1 ? "#ffffff" : "#858585", backgroundColor: value === 1 ? '#73c3f1' : '#f7f7f7', borderRadius: '12px', margin: '0 5px'}} />
          <Tab label="Hotel" style={{color: value === 2 ? "#ffffff" : "#858585", backgroundColor: value === 2 ? '#73c3f1' : '#f7f7f7', borderRadius: '12px', margin: '0 5px'}} />
          <Tab label="Villa" style={{color: value === 3 ? "#ffffff" : "#858585", backgroundColor: value === 3 ? '#73c3f1' : '#f7f7f7', borderRadius: '12px', margin: '0 5px'}} />
          <Tab label="Community" style={{color: value === 4 ? "#ffffff" : "#858585", backgroundColor: value === 4 ? '#73c3f1' : '#f7f7f7', borderRadius: '12px', margin: '0 5px'}} />
        </Tabs>
      </Box>
      <Box sx={{ pt: 2, display: "flex", flexDirection: "row", justifyContent: "space-between", gap: 4}}>
        {OptionList.map((service) => (
          <Paper elevation={3}>
            <Box sx={{ m: 3 }}>
              <Typography variant="h3">{service}</Typography>
              <Typography sx={{ mt: 2 }}>
                Lorem ipsum 
              </Typography>
            </Box>
          </Paper>
        ))}
      </Box>
    </Container>
  );
}

export default App;
