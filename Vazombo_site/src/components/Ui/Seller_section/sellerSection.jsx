import React from 'react'
import './seller.css'



import {Container, Row, Col} from 'reactstrap'
import SELLER__DATA from '../../../assets/data/data'

function sellerSection() {
  return (
   <section className='seller__section'>
    <Container>
        <Row>
            <Col lg='12' className='mb-5'>
                <div className="seller_section-title">
                    <h3>Top Sellers</h3>

                </div>
            </Col>
            {
                SELLER__DATA.map((item) =>{
                    return(
                        <Col lg='2' md='3' sm='4' xs='6' key={item.id} className='mb-5'>
                        <div className="single_seller-card d-flex align-items-center gap-6">
                            <div className="seller_img">
                            <img src={item.sellerImg} alt="avatar" className='w-100'  />
                            </div>
                     
                        <div className='seller__content'>
                            <h6 className='name'>{item.sellerName}</h6>
                            <h6 className='price'>{item.currentBid} XTZ</h6> 
                            </div>
                        </div>
                    </Col>
                    )
                })
            }
        </Row>
    </Container>
   </section>
  )
}

export default sellerSection