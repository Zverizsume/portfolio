import React, { Component } from 'react';
import Layout from '../components/layout';
import NavLeft from '../components/navLeft';

const pageSEOData = {
  title : 'Contact',
  desc: 'Contact page',
  canonical: ''
}

export default function Contact() {
  return(
    <Layout pageSEOData={pageSEOData} >
      <NavLeft>

      </NavLeft>
    </Layout>
  )
}