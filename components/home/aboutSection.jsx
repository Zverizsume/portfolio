import React, { Component } from 'react';
import { Box, Container, Typography } from '@mui/material'

export default function AboutSection() {
    return (
        <Box
            component='section'
            pt='24px'
            name='about'
            minHeight={'100vh'}
        >
            <Container
                maxWidth='lg'
            >
                <Typography
                    variant='h2'
                    fontWeight={600}
                    color='rgb(0, 0, 0, .7)'
                    mt={'40px'}
                    mb={'40px'}
                >
                    About Me
                </Typography>
                <Box
                    display={'flex'}
                    flexDirection={'row'}
                    color={'#8D8D8D'}
                >
                    <Box
                        width={'50%'}
                    >
                        <Typography
                            lineHeight={'2rem'}
                        >
                            Hi, my name is Aleksa, I come from Serbia, small Southeast European country.<br/>
                            I've been working 5+ years as a freelance web developer.<br/>
                            I've worked on various types of projects, mainly small web applications that are using some kind of API, for gathering real time data.<br/>
                            Since few years ago, I started using NextJS, a ReactJS framework.<br/>
                        </Typography>
                    </Box>

                </Box>
            </Container>
        </Box>
    )
}