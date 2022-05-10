import React, { Component } from 'react';
import { Container, Typography, Box, Icon } from '@mui/material'
import {KeyboardArrowDown as Arrow} from '@mui/icons-material'
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

export default function HeaderSection() {
    return (
        <Box
            component='section'
            pt='24px'
            height={'100vh'}
            position={'relative'}
        >
            <Container
                maxWidth='lg'
                sx={{
                    height: '100%'
                }}
            >
                <Box
                    display={'flex'}
                    flexDirection={'column'}
                    minHeight={'100%'}
                    justifyContent={'space-between'}
                >
                    <Box
                        display={'flex'}
                        flexDirection={'column'}
                    >
                        <Typography
                            variant='h1'
                            fontWeight='400'
                            fontSize='6rem'
                            sx={{
                            fontFamily: `'Bungee Shade', cursive`,
                            }}
                        >
                            Hi,<br/> I'm 
                            <Typography variant='span' color='#BD0F15'> A</Typography>leksa 
                            <Typography variant='span' color='#BD0F15'> J</Typography>evtic,<br/> web developer.
                        </Typography>
                        <Typography pt={5} variant='subtitle1'> ReactJS (NextJS) developer. </Typography>
                    </Box>
                    <Box
                        display={'flex'}
                        flexDirection={'row'}
                        justifyContent={'space-between'}
                        justifySelf={'flex-end'}
                        mb={'50px'}
                    >
                        <Box
                            width={'calc(40%)'}
                            height={'0px'}
                            border={'6px solid #242424'}
                        >
                        </Box>
                        <Box
                            width={'calc(40%)'}
                            height={0}
                            border={'6px solid #242424'}
                        >
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            position: 'absolute',
                            bottom: '24px',
                            left: '50%',
                            transform: 'translateX(-50%)'
                        }}
                    >
                        <Link style={{ cursor: 'pointer'}} to="about" spy={true} smooth={true} duration={500}>
                            <Arrow 
                                sx={{
                                    fontSize: 50,
                                    animation: 'bounce 2s infinite 2s',
                                    transition: 'all .2s ease-in',
                                }} 
                            />
                            <Box></Box>
                        </Link>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}