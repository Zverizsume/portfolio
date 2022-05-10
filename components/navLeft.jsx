import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import Link from 'next/link';

const drawerWidth = 150;

export default function PermanentDrawerLeft({children}) {

  const CustomIconButton = styled(IconButton)(() => ({
    color: '#8D8D8D',
    transition: '.3s all ease-in-out',
    '&:hover' : {
        color: '#BD0F15'
    }

  }))

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            display:'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            height: '100%',
            width: drawerWidth,
            boxSizing: 'border-box',
            bgcolor: '#242424',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}
        > 
            <Link href='/'><a>
            <Typography
                sx={{
                    fontFamily:`'Bungee Shade', cursive`,
                    color: '#BD0F15',
                    fontSize: '4rem'

                }}
            >
                AJ
            </Typography>
            </a></Link>
        </Box>
        <Box>
          <List>
          <Divider />
            {['About', 'Skills', 'Work', 'Contact'].map((text, index) => (
              <>
              <Link href={text.toLowerCase()}>
                <a>
                  <ListItem button key={text}>
                    <ListItemText 
                      primary={text}
                      sx={{
                          width: '100%',
                          textAlign: 'center',
                          transition: '.3s all ease-in-out',
                          color:'#8D8D8D',
                          '&:hover' : {
                              color: '#BD0F15',
                          }
                      }} 
                    />
                  </ListItem>
                </a>
              </Link>
              <Divider />
              </>
            ))}
          </List>
        </Box>
        <Stack 
            mt={2}
            direction={'row'} 
            alignItems={'center'}
            justifyContent={'space-evenly'}
        >
            <CustomIconButton>
                <LinkedInIcon />
            </CustomIconButton>
            <CustomIconButton>
                <GitHubIcon />
            </CustomIconButton>
            <CustomIconButton>
                <InstagramIcon />
            </CustomIconButton>
        </Stack>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: '#292929', p: 3, minHeight: '100vh', p: '0px 24px 0px 24px' }}
      >
        {children}
      </Box>
    </Box>
  );
}