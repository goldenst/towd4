import JWT from 'jsonwebtoken'
import asyncHandler from 'express-async-handler'
import User from '../models/User'

const protect = asyncHandler( async (req, res, next ) => {
    let token 

    if (
        req.headers.authorization && 
        req.headers.authorization.startsWith('Bearer')
    ) {
        try {
            
        } catch (error) {
     const decoded = jwt.verify(token)  
        }
        console.log('Token found')
    }

    if(!token) {
        res.status(401)
        throw new Error("Not Authorized, no Token ")


})


export default protect