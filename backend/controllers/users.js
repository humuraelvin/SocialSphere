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