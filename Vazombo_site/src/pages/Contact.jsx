import React, {useRef} from 'react'
import CommonSection from '../components/Ui/Common-section/CommonSection'

import {Container, Row, Col} from 'reactstrap'

import '../styles/create-item.css'

function Contact() {

  const nameRef = useRef("")
  const emailRef = useRef("")
  const subjectRef = useRef("")
  const messageRef = useRef("")

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
  <CommonSection  title='Contact Us'/>

  <section>
    <Container>
      <Row>
        <Col lg='6' md='6' className='m-auto heading__info'>
        <h2>Drop a Message</h2>
        <p>Want to know when your favourite brain will be available? Leave your deets</p>
          <div className="contact mt-4 align-items-center">
            <form onSubmit={handleSubmit}>
              <div className="form_input">
                <input type='text' placeholder='Enter your name'  ref={nameRef}/>
              </div>
              <div className="form_input">
                <input type='text' placeholder='Enter your email' ref={emailRef} />
              </div>
              <div className="form_input">
                <input type='text' placeholder='Enter subject' ref={subjectRef}/>
              </div>
              <div className="form_input" ref={messageRef}>
                <textarea cols='30' rows='7' placeholder='Write a message'></textarea>
              </div>
              <button className="send__btn" style={{border:'none', padding:'7px 25px', outline:'none', textAlign:'center', background:"#301e83", color:"#fff", borderRadius:"20px", marginRight:"30px"}}>Send a Message</button>
            </form>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
  </>
  )
}

export default Contact