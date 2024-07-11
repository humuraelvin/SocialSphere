import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        width: '100%',
        padding: '1rem',
        backgroundColor: '#3f51b5',
        color: 'white',
        textAlign: 'center',
        mt: '2rem',
        position: 'relative',
        bottom: 0,
      }}
    >
      <Typography variant="body1">
        Copyright &copy; SocialSphere HUMURA PROJECTS 2024 All right reserved
      </Typography>
    </Box>
  );
};

export default Footer;
