import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPosts } from "../../state/index.js";
import PostWidget from './PostWidget.jsx'

const PostsWidget = ({ userId, isProfile = false}) => {

    const dispatch = useDispatch();
    const posts = useSelector((state) => state.posts)
    const token = useSelector((state) => state.token)

}

export default PostsWidget;