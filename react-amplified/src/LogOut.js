import React from 'react';
import { Auth } from 'aws-amplify';
import { Button } from 'react-bootstrap';

function LogoutButton() {
  const handleLogout = async () => {
    try {
      await Auth.signOut();
      window.location.reload(); // refresh the page to clear the session
    } catch (error) {
      console.log('Error signing out:', error);
    }
  };

  return (
    <Button onClick={handleLogout}>
      Log out
    </Button>
  );
}

export default LogoutButton;