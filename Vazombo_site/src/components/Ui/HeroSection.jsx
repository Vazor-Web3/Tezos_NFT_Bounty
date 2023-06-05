import React, {useEffect} from 'react'

import { Swiper, SwiperSlide,  } from "swiper/react";
import './Hero-section.css'
import {Container, Row, Col}  from 'reactstrap'
import{Link} from 'react-router-dom'
import heroImage from '../../assets/img/images (1).jpeg'
import heroImage1 from '../../assets/img/images (2).jpeg'
import heroImage2 from '../../assets/img/images (3).jpeg'
import heroImage3 from '../../assets/img/images (4).jpeg'
import heroImage4 from '../../assets/img/images (5).jpeg'
import heroImage5 from '../../assets/img/new4.jpg'
import { EffectCards,Autoplay, } from "swiper";

import  Aos  from 'aos';
import 'aos/dist/aos.css'



function HeroSection() {
  useEffect(() =>{
    Aos.init({duration:3000})
  },[])


  
  return (
   

   <section className='hero__section overflow-hidden'>
    <Container>
      <Row>
        <Col lg='6' md='6'>
          <div className='hero__content'>
            <h4 className='text-light' data-aos='fade-left'data-aos-delay="50">Vazombo! <span className='h4__nft'>NFT </span> marketplace</h4>
            <h1>Create and discover <span className='nft__color'>Exclusive NFT Collections</span></h1>
            <p>
                Vazombo is a NFT Marketplace built on Tezos, where you can trade &amp; 
                create 'zombie-brain' digital Assets.</p>

              <div className="hero__btn d-flex align-items-center gap-4">
              <button className='hero-btn1 d-flex align-items-center gap-2'><Link to='/market'>Explore<i class="ri-rocket-line"></i></Link></button>
              <button className='hero-btn2 d-flex align-items-center gap-2'><Link to='/create'>Create<i class="ri-arrow-right-up-fill"></i></Link></button>
          </div>
              </div>
        </Col>
        <Col lg='6' md='6'>
          <div className="hero-img">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[EffectCards, Autoplay]}
            className="mySwiper"
          >
          <SwiperSlide>  <img src={heroImage} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage1} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage2} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage3} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage4} alt='hero' width='400px' /></SwiperSlide>
        <SwiperSlide>  <img src={heroImage5} alt='hero' width='400px' /></SwiperSlide>

      </Swiper>
          
          </div>
        </Col>
      </Row>
    </Container>
   </section>
  )
}

export default HeroSection