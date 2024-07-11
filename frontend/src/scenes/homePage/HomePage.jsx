import React from 'react'
import { Box, useMediaQuery } from '@mui/material'
import { useSelector } from 'react-redux'
import NavBar from '../navbar/NavBar'

const HomePage = () => {

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
  const [_id, picturePath] = useSelector((state) => state.user)

  return (
    <Box>
      <NavBar />
    </Box>
  )
}

export default HomePage
