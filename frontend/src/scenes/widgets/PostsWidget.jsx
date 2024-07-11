import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/index.js";
import PostWidget from './PostWidget.jsx'

const PostsWidget = ({ userId, isProfile = false}) => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts)
    const token = useSelector((state) => state.token)

    const getPosts = async () => {
        const response = await fetch("http://localhost:3001/posts", {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        })

        const data = await response.json()
        dispatch(setPosts({ posts:data }))
    }

    const getUserPosts = async () => {
        const response = await fetch(`http://localhost:3001/posts/${userId}/posts`, {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
        })

        const data = await response.json()
        dispatch(setPosts({ posts:data }))
    };

    useEffect(() => {
        if (isProfile) {
            
        }
    })

}

export default PostsWidget;