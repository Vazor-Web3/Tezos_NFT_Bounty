import {useState} from 'react'
import { Link } from 'react-router-dom'
import './nft__Card.css'


import Modal from '../modal/Modal'

function NftCard(props) {
    const [showModal, setShowModal] = useState(false)


    const {title, id, currentBid, creatorImg, imgUrl, creator} = props.item
 return    <div className="single__nft__card">
  <div className="nft__img">
    <Link to={`/market/${id}`}>
      <img src={imgUrl} alt="nft" className='w-100' />
      </Link>
  </div>
  <div className="nft__content">
      <h5 className='nft__title'> <Link to={`/market/${id}`}>{title}</Link></h5>
      <div className="creator__info-wrapper d-flex gap-3">
          <div className="creator__img">
              <img src={creatorImg} alt="avatar" className='' width='40px' />
          </div>
          <div className="creator__info w-100 d-flex align-items-center justify-content-between">
              <div>
              <h5>Created By</h5>
              <p>{creator}</p>
              </div>
              <div>
                  <h5>Current Bid</h5>
                  <p className='creator__bid'>{currentBid} XTZ</p>
              </div>
          </div>
      </div>

      <div className='card__btn d-flex align-items-center justify-content-between'>
          <button className="bid__btn d-flex align-items-center" onClick={()=>setShowModal(true)}>
              Place Offer<i class="ri-shopping-cart-line"></i>
          </button> 

          {showModal && <Modal setShowModal={setShowModal} />}
          <span className='bid__link'><Link to={`/market/${id}`}>View History</Link></span>
      </div>
  </div>
</div>
}

export default NftCard