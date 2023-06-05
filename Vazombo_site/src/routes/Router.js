import React from 'react'
import {Routes, Route } from 'react-router-dom'


import Home from '../pages/Home'
import Market  from '../pages/Market'
import NftDetails from '../pages/NftDetails'
import Contact from '../pages/Contact'
import SellerProfile from '../pages/SellerProfile'
import Create from '../pages/Create'
import EditProfile from '../pages/EditProfile'


function Router() {
  return <Routes>
    <Route path='/' element={<Home/>} />
    <Route path='/contact' element={<Contact/>} />
    <Route path='/market/:id' element={<NftDetails/>} />
    <Route path='/market' element={<Market/>} />
    <Route path='/create' element={<Create/>} />
    <Route path='/editProfile' element={<EditProfile/>} />
    <Route path='/sellerProfile' element={<SellerProfile/>} />
  </Routes>
}

export default Router