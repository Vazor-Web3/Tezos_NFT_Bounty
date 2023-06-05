import React from 'react'
import CommonSection from '../components/Ui/Common-section/CommonSection'
import SellerSection from '../components/Ui/Seller_section/sellerSection'
import '../styles/Market.css'
import Trending from '../components/Ui/Trending-action/Trending'


function Market() {

  return (
    <>
    <CommonSection  title={'Vazombo Market'}/>
    <Trending />
    <SellerSection />
    </>
  )
}

export default Market