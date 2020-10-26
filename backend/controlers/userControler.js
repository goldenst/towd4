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

// @Desc        REGISTER a new User
// @route       POST /api/v1/user/
// @access      Public
const registerUser =  asyncHandler(async (req, res ) => {
    const { name, email, password } = req.body

    const userExists = await User.findOne({ email })

    if (userExists) {
        res.status(400)
        throw new Error('User Already Exists')
    }

    const user = await User.create({
        name,
        email,
        password
    })

    if (user) {
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            token: generateTokin(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid User Data')
    }
     
})

// @Desc        GET User Profile
// @route       GET /api/v1/user/profile
// @access      Private
const getUserProfile =  asyncHandler(async (req, res ) => {
    
    const user = await User.findById(req.user._id)
   
    if (user) {
        res.json({
            _id: user._id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        })
    } else {
        res.status(404)
        throw new Error('Invalid User or password')
    }

})

// @Desc        Update User Profile
// @route       PUT /api/v1/user/profile
// @access      Private
const updateUserProfile =  asyncHandler(async (req, res ) => {
    
    const user = await User.findById(req.user._id)
   
    if (user) {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if (req.body.password) {
            user.password = req.body.password
        }

        const updatedUser = await user.save()

        res.json({
            _id: updatedUser._id,
            name: updatedUser.name,
            email: updatedUser.email,
            isAdmin: updatedUser.isAdmin,
            token: generateTokin(updatedUser._id)
        })
        
       
    } else {
        res.status(404)
        throw new Error('Invalid User or password')
    }

})

// @Desc        GET  All User 
// @route       GET /api/v1/users
// @access      Private / admin
const getUsers =  asyncHandler(async (req, res ) => {
    const users = await User.find({})
    res.json(users)
})

// @Desc        DELETE User 
// @route       DELETE /api/v1/users/:id
// @access      Private / admin
const deleteUser =  asyncHandler(async (req, res ) => {
    const user = await User.findById(req.params.id)

    if (user) {
        await user.remove()
        red.json({ message: 'User removed'})
    }else {
        res.status(404)
        throw new Error('User Not Found')
    }
    
})



export { authUser, getUserProfile, registerUser, updateUserProfile, getUsers, deleteUser }