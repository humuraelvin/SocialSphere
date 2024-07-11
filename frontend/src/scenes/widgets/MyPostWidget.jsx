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


    const handlePost = async () => {
        const formData = new FormData();
        formData.append("userId", _id);
        formData.append("description", post);

        if (image) {
            formData.append("picture", image)
            formData.append("picturePath", image.name);
        }

        const response = await fetch(`http://localhost:3001/posts`, {
            method: "POST",
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
        });

        const posts = await response.json()
        dispatch(setPosts({ posts }))
        setImage(null)
        setPost("")

    };


    return (
        <WidgetWrapper>
            <FlexBetween gap='1.5rem'>
                <UserImage picturePath={picturePath}/>

                <InputBase 
                
                    placeholder="What's on your mind ..."
                    onChange={(e) => setPost(e.target.value)}
                    value={post}
                    sx={{
                        width: "100%",
                        backgroundColor: pallete.neutral.light,
                        borderRadius: "2rem",
                        padding: "1rem 2rem"
                    }}

                />
            </FlexBetween>
            {
                isImage && (
                    <Box
                     border={`1px solid ${medium}`}
                     borderRadius='5px'
                     mt='1rem'
                    >

                        <Dropzone>
                            
                        </Dropzone>

                    </Box>
                )
            }
        </WidgetWrapper>
    )

}