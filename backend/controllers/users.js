import User from "../models/User";


const getUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findById(id);

        return res.status(200).json(user);

    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

const getUserFriends = async (req, res) => {
    try {P
        
        const {id} = req.params;

        const user = await User.findById(id);

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        )

        const formattedFriends = await friends.map(
            ({_id, firstName, lastName, email, occupation, location, picturePath}) => {
                return { _id, firstName, lastName, email, occupation, location, picturePath };
            }
        )


        return res.status(200).json(formattedFriends);

    } catch (error) {
        return res.status(404).json({ message: error.message })
    }
}

const addRemoveFriend = async (req, res) => {
    try {
        
        const {id, friendId} = req.params;

        const user = await User.findById(id);
        const friend = await User.findById(friendId);

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId)
            friend.friends = friend.friends.filter((id) => id !== id);
        }else{
            user.friends.push(friendId);
            friend.friends.push(id);
        }

        await user.save();
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id) => User.findById(id))
        )

        const formattedFriends = await friends.map(
            ({_id, firstName, lastName, email, occupation, location, picturePath}) => {
                return { _id, firstName, lastName, email, occupation, location, picturePath };
            }
        )


        return res.status(200).json(formattedFriends);

    } catch (error) {
        return res.status(500).json({message:"Internal server error", error: error.message})
    }
}