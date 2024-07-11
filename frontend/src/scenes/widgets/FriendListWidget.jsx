import { Box, Typography, useTheme } from "@mui/material";
import Friend from "../../components/Friend";
import WidgetWrapper from "../../components/WidgetWrapper";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFriends } from "../../state/index.js";

const FriendListWidget = ({ userId }) =>{
    const dispatch = useDispatch();
    const theme = useTheme();
    const { palette } = useTheme();
    const token  = useSelector((state) => state.token)
    const friends = useSelector((state) => state.user.friends)

    const getFriends = async () => {
        const response = await fetch(
            `http://localhost:3001/users/${userId}/friends`,
            {
                method: "GET",
                headers: { Authorization : `Bearer ${token}` }
            }
        );
    
        const data = await response.json()
        dispatch(setFriends({ friends: data }))
    
    };
    

}


export default FriendListWidget;