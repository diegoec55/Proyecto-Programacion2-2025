const {getIronSession} = require("iron-session")
const sessionOptions = require("../config/session")

const ironSessionMiddleware = async (req,res,next)  => {
    req.session = await getIronSession(req,res,sessionOptions)
    next()
}

module.exports = ironSessionMiddleware