import React, { Component } from 'react';
import Layout from '../components/layout';
import NavLeft from '../components/navLeft';

const pageSEOData = {
  title : 'About',
  desc: 'About page',
  canonical: ''
}

export default function About() {
  return(
    <Layout pageSEOData={pageSEOData} >
      <NavLeft>

      </NavLeft>
    </Layout>
  )
}