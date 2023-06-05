

import { useRef, useEffect, useState } from 'react'

import './Header.css'
import {Container } from 'reactstrap'
import {NavLink,} from 'react-router-dom'

import startImg from '../../assets/img/star-removebg-preview (3).png'
import {connectWallet, getAccount} from '../../Utils/wallet'

const NAV__LINKS = [
    {
        display: 'Home',
        url: '/' 
    },
    {
        display: 'Market',
        url: '/market' 
    },
    {
        display: 'Create',
        url: '/create' 
    },
    {
        display: 'Contact',
        url: '/contact' 
    },
]

function Header() {
 
const [account, setAccount] = useState("");

useEffect(() => {
    (async () => {
        const activeAccount = await getAccount()
      setAccount(activeAccount);
    })();
  }, []);


  //  onConnectWallet function
const onConnectWallet = async () => {
    await connectWallet()
    const activeAccount = await getAccount()
    setAccount(activeAccount)
  };


const headerRef = useRef(null)
const menuRef = useRef(null)

useEffect(() => {
window.addEventListener('scroll',() => {
    if(document.body.scrollTop > 80 || document.documentElement.scrollTop > 80){
        headerRef.current.classList.add('header_shrink')
    }else{
        headerRef.current.classList.remove('header_shrink')
    }
})
return()=>{""} 



},[])

const toggleMenu = () => menuRef.current.classList.toggle('active__menu')
  return (
    <header className='header'ref={headerRef}>
        <Container>
            <div className="navigation">
                <div className="logo">
                <img src={startImg} alt="star" width='70px' />
                
                </div>
                <div className="nav__menu" ref ={menuRef} onClick={toggleMenu}>
                    <ul className="nav__list">
                        { NAV__LINKS.map((item,index) =>(
                                    <li className="nav-item" key={index}>
                                    <NavLink to={item.url} className={navClass => navClass.isActive ? 'active': ""}>{item.display}</NavLink>
                                </li>
                             ))}
                    </ul>
                </div>

                <div className="nav-right d-flex align-items-center gap-5">
                    <button onClick={onConnectWallet} className='d-flex items-center gap-2 btn'><span><i class="ri-wallet-fill"></i></span>{account !== "" ? "wallet connected" :"Connect Wallet"}</button>

                         {/* MOBILE MENU */}
                         <span className='mobile_menu'><i class="ri-menu-2-line" onClick={toggleMenu}></i></span>
                </div>
            </div>
        </Container>
    </header>
  )
}

export default Header