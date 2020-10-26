import mongoose from 'mongoose'
import dotenv from 'dotenv'
import colors from 'colors'
import users from './data/users.js'
import calls from './data/call.js'

import User from './models/User.js'
import Calls from './models/Calls.js'

import connectDB from './config/db.js'

dotenv.config()

connectDB()

const importData = async () => {
    try {
        await User.deleteMany()
        await Calls.deleteMany()

        const createdUser = await User.insertMany(users)

        const adminUser = createdUser[0]._id 
        
        const sampleCalls = calls.map(call => {
            return{ ...call, user: adminUser}
        })

        await Calls.insertMany(sampleCalls)

        console.log('Data imported'.green.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}

const destroyData = async () => {
    try {
        await User.deleteMany()
        await Calls.deleteMany()

        console.log('Data Deleted'.red.inverse)
        process.exit()
    } catch (error) {
        console.log(`${error}`.red.inverse)
        process.exit(1)
    }
}


if(process.argv[2] === '-d') {
    destroyData()
} else {
    importData()
}