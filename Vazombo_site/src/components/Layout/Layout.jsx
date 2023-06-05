import React from 'react'
import Router from '../../routes/Router'
import Header from '../Header/Header'
import Footer from '../footer/footer'



function Layout() {
  return (
   <>
   <Header />
    <Router/>
   <Footer />
   </>
  )
}

export default Layout