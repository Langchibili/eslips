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
    <div className="footer out-footer">
    <div className="copyright">
      <p>
        Copyright © Designed &amp; Developed by{" "}
        <a href="https:// dexignzone.com/" target="_blank">
          {" "}
          Langdev
        </a>{" "}
        2023 ~
      </p>
    </div>
  </div>

  );
}
