




export const verifyToken = (req,next) => {
    if (!req.Token) 
        return "error"

    next()
} 