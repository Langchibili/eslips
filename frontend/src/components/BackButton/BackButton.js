import React, { Component } from 'react';
import Button from '@mui/material/Button';

class BackButton extends Component {
  handleBack = (e) => {
      e.preventDefault()
      window.history.back();
  };

  render() {
    return (
      <Button
        onClick={this.handleBack}
        disabled={window.location.pathname === '/'}
        variant="contained"
      >
        Back
      </Button>
    );
  }
}

export default BackButton;
