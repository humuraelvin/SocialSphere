import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import NavBar from '../navbar/NavBar'

const HomePage = () => {

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
  const {_id, picturePath} = useSelector((state) => state.user)

  return (
    <Box>
      <NavBar />
      
      <Box
       width='100%'
       padding='2rem 6%'
       display={isNonMobileScreens ? "flex" : "block"}
       gap='0.5rem'
      >

      </Box>
    </Box>
  )
}

export default HomePage
