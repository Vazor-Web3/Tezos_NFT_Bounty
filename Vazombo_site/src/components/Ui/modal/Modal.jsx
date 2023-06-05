import React from 'react'
import './modal.css'

const  Modal = ({setShowModal,currentBid}) => {

  return (
    <section>
        <div className="modal__wrapper" >~=
            <div className="single__modal">
            <span className='closeModal' onClick={()=>setShowModal(false)}><i class="ri-close-line"></i></span>
                <h3 className='text-center text-light bid__title'>Place Offer</h3>
                <p className='text-center'>You must bid at least <span className='amount'>{currentBid}</span></p>
                <div className="input__item">
                    <input type='number' placeholder='00:00 XTZ' />
                </div>

                <div className="input__item">
                    <h6 className='quantity'>Enter Quantity, 7 available</h6>
                    <input type='number' placeholder='Enter quantity' />
                </div>

                <div className='d-flex align-items-center justify-content-between'>
                    <p>You must bid at least</p>
                    <span className='amount'>5.89 XTZ</span>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <p>Service Fee</p>
                    <span className='amount'>0.00</span>
                </div>
                <div className='d-flex align-items-center justify-content-between'>
                    <p>Total Bid Amount</p>
                    <span className='amount'>{currentBid}</span>
                </div>
                <button className="place__bid-btn">
                    Place Offer
                </button>
            </div>
        </div>
    </section>
  )
}

export default Modal