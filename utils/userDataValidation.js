


export const isReqHasData = (req,res,next) => {
    !req.body ||  Object.keys(req.body).length === 0 && (req.method !== "GET"&& req.method !== "DELETE")?
    res.status(400).send("Body (data) is required"):
    next()
}