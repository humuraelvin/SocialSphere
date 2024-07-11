import {

    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined

} from '@mui/icons-material'

import { Box, Typography, Divider, useTheme } from '@mui/material'
import UserImage from '../../components/UserImage'
import FlexBetween from '../../components/FlexBetween'
import WidgetWrapper from '../../components/WidgetWrapper'
import { useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'


const UserWidget = ({ userId, picturePath }) => {
    const [user, setUser] = useState(null)
    const { pallete } = useTheme()
    const navigate = useNavigate();
    const token = useSelector((state) => state.token)
    const dark = pallete.neutral.dark;
    const medium = pallete.neutral.medium;
    const main = pallete.neutral.main;

    const getUser = 

}