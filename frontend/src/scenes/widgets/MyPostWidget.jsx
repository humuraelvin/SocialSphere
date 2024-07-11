import {

    EditOutlined,
    DeleteOutline,
    AttachFileOutlined,
    GifBoxOutlined,
    ImageOutlined,
    MicOutlined,
    MoreHorizOutlined

} from '@mui/icons-material'

import {
     
    Box,
    Divider,
    Typography,
    InputBase,
    useTheme,
    Button,
    IconButton,
    useMediaQuery

 } from '@mui/material'
import FlexBetween from '../../components/FlexBetween'
import Dropzone from 'react-dropzone'
import UserImage from '../../components/UserImage'
import WidgetWrapper from '../../components/WidgetWrapper'
import { useState } from 'react'
import { useDispatch,useSelector } from 'react-redux'
import { setPosts } from '../../state/index.js'

const MyPostWidget = ({ picturePath }) => {
    const dispatch = useDispatch()
    const [isImage, setIsImage] = useState(false)
    const [image, setImage] = useState(null)
    const [post, setPost] = useState("")
    const { pallete } = useTheme()
    const { _id } = useSelector((state) => state.user)
    const token = useSelector((state) => state.token)
    const isNonMobileScreens = useMediaQuery("(min-width: 1000px)")
    const mediumMain = pallete.neutral.mediumMain;
    const medium = pallete.neutral.medium
}