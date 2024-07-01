import React from 'react'
import Cover from '../../assets/img/cover.jpg'
import Profile from '../../assets/img/profile.jpg'
import './ProfileCard.css'

const ProfileCard = () => {
  return (
    <div className='ProfileCard'>
      <div className="ProfileImages">
        <img src={Cover} alt="" />
        <img src={Profile} alt="" />
      </div>
      <div className="ProfileName">
        <span>Humura Elvin</span>
        <span>Senior Backend developer</span>
      </div>
    </div>
  )
}

export default ProfileCard
