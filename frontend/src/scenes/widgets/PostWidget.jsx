import {

    ChatBubbleOutlineOutlined,
    FavoriteBorderOutlined,
    FavoriteOutlined,
    ShareOutlined,

} from '@mui/icons-material'
import { Box, Divider, IconButton, Typography, useTheme } from '@mui/material'
import FlexBetween from '../../components/FlexBetween'
import Friend from '../../components/Friend'
import WidgetWrapper from '../../components/WidgetWrapper'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setPost } from '../../state/index.js'


const PostsWidget = ({
    key,
    postId,
    postUserId,
    name,
    description,
    location,
    picturePath,
    userPicturePath,
    likes,
    comments
}) => {
    const [isComments, setIsComments] = useState(false)
    const dispatch = useDispatch();
    const token  = useSelector((state) => state.token)
    const isLiked = Boolean(likes[loggedInUserId])
    const likeCount = Object.keys(likes).length

    const { palette } = useTheme();
    const main = palette.neutral.main
    const medium = palette.primary.main

    const patchLike = async () => {
       const response =  await fetch (`http://localhost:3001/posts/${postId}/like`, {
            method: "PATCH",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type" : "application/json"
            },
            body: JSON.stringify({ userId: loggedInUserId })
        });

        const updatedPost = await response.json()
        dispatch(setPost({ post: updatedPost }))

    };

    return (
        <WidgetWrapper m='2rem 0'>
            <Friend 
             friendId={postUserId}
             name={name}
             subtitle={location}
             userPicturePath={userPicturePath}
            />
            <Typography color={main} sx={{ mt: "1rem" }}>
                {description}
            </Typography>
        </WidgetWrapper>
    )

}

export default PostWidget;