


export const isReqHasData = (req,res,next) => {
    !req.body &&(req.method !== "GET"&& req.method !== "DELETE")?
    res.status(400).send("Body (data) is required"):
    next()
}