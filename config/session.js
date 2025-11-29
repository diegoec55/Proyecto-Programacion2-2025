const sessionOptions = {
    password: process.env.SECRET,
    cookieName: "prog2-session",
    cookieOptions: {
        secure: process.env.NODE_ENV==="production", //en produccion es https
        maxAge: 24*60*60,
        httpOnly: true, //javascript del navegar no pueda acceder a la cookie
        sameSite: "lax",
        path: "/",
    }
}

module.exports = sessionOptions