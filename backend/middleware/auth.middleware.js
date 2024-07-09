import jwt from 'jsonwebtoken'


const verifyToken = async (req, res, next) => {
    try {
        
        let token = req.header("Authorization");

        if(!token){
            return res.status(403).send("Access denied. No token provided")
        }

        if (token.startsWith("Bearer ")) {
            token = token.slice(7, token.length).trimLeft();
        }

        const verified = jwt.verify(token, process.env.JWT_SECRET);

        req.user = verified;
        next();

    } catch (error) {
        return res.status(500).json({message:"Internal server error", error:error.message })
    }
}

export default verifyToken;