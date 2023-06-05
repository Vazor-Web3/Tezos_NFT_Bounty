import React from 'react'
import '../styles/nftdetails.css'

import CommonSection from '../components/Ui/Common-section/CommonSection'
import { Container, Col, Row,} from 'reactstrap'
import {useParams} from 'react-router-dom'
import {NFT__DATA} from '../assets/data/data'


import LiveAuction from '../components/Ui/Live-Auction/LiveAuction'


function NftDetails() {
const {id} = useParams()

const singleNft = NFT__DATA.find((item) => item.id === id )



  return (
    <>
    <CommonSection title={singleNft.title} />
    <section>
        <Container>
        <Row>
          <Col>
            <img src={singleNft.imgUrl} alt='nft'  className='w-100 single__nft__img'/>
          </Col>

          <Col lg='6' md='6' sm='6'>
            <div className="single__nft__content">
              <h2 className='my-5'>{singleNft.title}</h2>
              <div className='d-flex align-items-center justify-content-between mt-4 mb-4'>
                <div className='d-flex align-items-center gap-4 single__nft__seen'>
                  <span><i class="ri-eye-line"></i>  34</span>
                  <span><i class="ri-heart-line"></i> 21</span>
                </div>
                <div className='d-flex align-items-center gap-4 single__nft__more'>
                  <span><i class="ri-send-plane-line"></i></span>
                  <span><i class="ri-more-2-line"></i></span>
                </div>
              </div>

              <div className="nft__creator d-flex gap-3 align-items-center">
                <div className="creator__img">
                  <img src={singleNft.creatorImg} alt="img"  className='w-100'/>
                </div>

                <div className="creator__details">
                  <p>Created By</p>
                  <h6>{singleNft.creator}</h6>
                </div>
              </div>
              <div className='my-4'>
              <p className='creator__desc'>{singleNft.desc}</p>
              </div>

              <button className='offer-btn'>Place Offer <i class="ri-shopping-cart-line"></i></button>
            </div>
          </Col>
        </Row>
        </Container>

      <LiveAuction />
    </section>
    </>
  )
}

export default NftDetails