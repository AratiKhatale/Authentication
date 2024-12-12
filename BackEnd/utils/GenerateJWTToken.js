import jwt from 'jsonwebtoken';

export const GenerateAWTToken = (res, userID) =>{
    const jwtToken = jwt.sign({userID}, process.env.JWT_SECREAT_KEY, {
        expiresIn:'7d'
    })
// cookie is used not cookies....
    res.cookie('token',jwtToken, {
        httpOnly : true,  //cookies cant access by client side scripts
        secure : process.env.NODE_ENV === 'production', // cookies can only set on https
        sameSite: 'strict', // cookies will only set on the same side.
        maxAge: 7 * 24 * 60 * 60 * 1000,
    })

    return jwtToken;
}