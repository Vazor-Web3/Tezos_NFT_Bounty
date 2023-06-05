import React from 'react'
import {Container, Row, Col} from 'reactstrap'
import {Link} from 'react-router-dom'
import './LiveAuction.css'

import NftCard from '../../Ui/Nft__cards/NftCard'

import {NFT__DATA} from '../../../assets/data/data'

function LiveAuction() {
  return (
    <section className='live__auction'>
    <Container>
        <Row>
            <Col lg='12' className='mb-4'>
                <div className="live__sales__top d-flex align-items-center justify-content-between">
                <h3>Live Sales</h3>
                <span><Link to='/market'>Explore More<i class="ri-more-fill"></i></Link></span>
                </div>
            </Col>
            {NFT__DATA.slice(0,4).map((item) =>{
                return(
                    <Col lg='3' md='4' sm='6'>
                   <NftCard key={item.id} item={item}/>
                   </Col>
                )
            })}
           
        </Row>
    </Container>
    </section>
    
  )
}

export default LiveAuction