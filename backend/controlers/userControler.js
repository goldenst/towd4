import asyncHandler from 'express-async-handler'
import generateTokin from '../utils/generateTokin.js'
import User from '../models/User.js'


// @Desc        Auth User & get Token
// @route       POST /api/v1/user/login
// @access      Public
const authUser =  asyncHandler(async (req, res ) => {
    const { email, password } = req.body
    const user = await User.findOne({ email })

    if (user&& (await user.matchPassword(password)) ) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password,
            isAdmin: user.isAdmin,
            token: generateTokin(user._id)
        })
    } else {
        res.status(401)
        throw new Error('Invalid Email or password')
    }
     
})

// @Desc        GET User Profile
// @route       GET /api/v1/user/profile
// @access      Private
const getUserProfile =  asyncHandler(async (req, res ) => {
    
    // const user = await User.findById(req.user._id)
    res.send('success')


})



export { authUser, getUserProfile }