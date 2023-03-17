import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

function Navbar() {
  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">
          Career Compass
        </Typography>
        <Button component={Link} to="/" color="inherit">Home</Button>
        <div className="logout-button">
          <Button onClick={handleLogout} color="inherit">Logout</Button>
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
