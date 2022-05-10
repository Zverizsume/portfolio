import React, { Component } from 'react';
import Layout from '../components/layout';
import NavLeft from '../components/navLeft';

const pageSEOData = {
  title : 'Skills',
  desc: 'Skills page',
  canonical: ''
}

export default function Skills() {
  return(
    <Layout pageSEOData={pageSEOData} >
      <NavLeft>

      </NavLeft>
    </Layout>
  )
}