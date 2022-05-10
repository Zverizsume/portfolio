import React, { Component } from 'react';
import Layout from '../components/layout';
import NavLeft from '../components/navLeft';

const pageSEOData = {
  title : 'Work',
  desc: 'Work page',
  canonical: ''
}

export default function Work() {
  return(
    <Layout pageSEOData={pageSEOData} >
      <NavLeft>

      </NavLeft>
    </Layout>
  )
}