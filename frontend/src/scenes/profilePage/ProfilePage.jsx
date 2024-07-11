import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import NavBar from '../navbar/NavBar'
import FriendListWidget from '../widgets/FriendListWidget'
import MyPostWidget from '../widgets/MyPostWidget'
import PostsWidget from '../widgets/PostsWidget'
import UserWidget from '../widgets/UserWidget'

const ProfilePage = () => {

  const [user, setUser] = useState(null)
  const { userId } = useParams();
  const token = useSelector((state) => state.token)
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)")

  const getUser = async () => {
    const response = await fetch(`http://localhost:3001/users/${userId}`,
      {
        method : "GET",
        headers: { Authorization:  `Bearer ${token}` }
      }
    )

    const data = await response.json()
    setUser(data)

  }

  useEffect(() => {
    getUser();
  }, [])

  if (!user) {
    return null
  }

  return <Box>
    <NavBar />

    <Box
       width='100%'
       padding='2rem 6%'
       display={isNonMobileScreens ? "flex" : "block"}
       gap='0.5rem'
       justifyContent='space-between'
      >

        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
            <UserWidget userId={_id} picturePath={picturePath}/>
        </Box>

        <Box
         flexBasis={isNonMobileScreens ? "42%" : undefined}
         mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={picturePath}/>
          <PostsWidget userId={_id} />
        </Box>

        {isNonMobileScreens && (
          <Box flexBasis='26%'>
            <AdvertWidget />
            <Box m='2rem 0'/>
            <FriendListWidget userId={ _id }/>
          </Box>
        )}

      </Box>

  </Box>
}

export default ProfilePage
