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

      <div className="followStatus">
        <hr />
        <div>
            <div className="follow">
                <span>10,000</span>
                <span>Followers</span>
            </div>
            <div className="vl"></div>
            <div className="follow">
                <span>10</span>
                <span>Following</span>
            </div>
        </div>
        <hr />
      </div>

        <span>
            My Profile
        </span>

    </div>
  )
}

export default ProfileCard
