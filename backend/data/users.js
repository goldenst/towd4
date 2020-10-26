import bcrypt from 'bcryptjs'

const users = [
{
    name: 'Admin user',
    email: 'admin@gm.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true
},
{
    name: 'John Doe',
    email: 'John@gm.com',
    password: bcrypt.hashSync('123456', 10)
},
{
    name: 'Jane Doe',
    email: 'Jane@gm.com',
    password: bcrypt.hashSync('123456', 10)
},

]

export default users