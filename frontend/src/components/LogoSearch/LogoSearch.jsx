import React from 'react'
import Logo from '../../assets/img/Social-Media-freepik-1076-72dpi-removebg-preview.png'
import './LogoSearch.css'
import { UilSearch } from '@iconscout/react-unicons'

const LogoSearch = () => {
  return (
    <div className='LogoSearch'>
      <img src={Logo} alt=""  className='logo'/>
      <div className="Search">
        <input type="text" placeholder='#Explore' />
        <div className="s-icon">
            <UilSearch />
        </div>
      </div>
    </div>
  )
}

export default LogoSearch
