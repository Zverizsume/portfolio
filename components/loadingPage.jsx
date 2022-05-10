import { Box, Typography } from '@mui/material';
import React, { Component } from 'react';

export default function LoadingPage({loading}) {
  return (
    <Box
      display={loading ? 'flex' : 'none'}
      justifyContent={'center'}
      alignItems={'center'}
      width={'100%'}
      height={'100vh'}
    >
      <Typography
        variant='h2'
      >
        PAGE IS LOADING...
      </Typography>
    </Box>
  )
}