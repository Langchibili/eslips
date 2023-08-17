import * as React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import SavingsIcon from '@mui/icons-material/Savings';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import HelpIcon from '@mui/icons-material/Help';

export default function BottomNav() {
  const [value, setValue] = React.useState(0);
                                                                                   
  return (
    <Box sx={{ position: 'fixed', zIndex:'1', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        {/* Use Link to navigate to different routes */}
        <Link to="/deposit_type">
          <BottomNavigationAction label="DEPOSIT" icon={<SavingsIcon />} />
        </Link>
        <Link to="/">
          <BottomNavigationAction label="HOME" icon={<AccountBalanceIcon />} />
        </Link>
        <Link to="/query_form">
          <BottomNavigationAction label="QUERY" icon={<HelpIcon />}/>
        </Link>
      </BottomNavigation>
    </Box>
  );
}
