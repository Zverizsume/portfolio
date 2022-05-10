import React, { Component } from 'react';

import { Box, Container, Typography, Stack, LinearProgress, Paper } from '@mui/material'

export default function SkillsSection() {
  return (
    <Box
      component={'section'}
      p={'24px 0px 24px 0px'}
      minHeight={'100vh'}
    >
      <Container
        maxWidth={'lg'}
      >
        <Typography
          variant={'h2'}
          mt={'40px'}
          mb={'40px'}
        >
          My skills & work
        </Typography>
        <Box>
          <Typography>
            NextJS
          </Typography>
        </Box>
        <Box
            width={'50%'}
        >
          <Paper
            elevation={3}
            sx={{
              backgroundColor: '#292929',
              p: '20px'
            }}
          >
            <Stack
                spacing={5}
            >
                <Box>
                    <Typography>ReactJS / NextJS</Typography>
                    <LinearProgress color='error' variant='determinate' value={70}/>
                </Box>
                <Box>
                    <Typography>HTML5</Typography>
                    <LinearProgress color='error' variant='determinate' value={80}/>
                </Box>
                <Box>
                    <Typography>CSS3</Typography>
                    <LinearProgress color='error' variant='determinate' value={80}/>
                </Box>
            </Stack>
          </Paper>
        </Box>
      </Container>
    </Box>
  )
}