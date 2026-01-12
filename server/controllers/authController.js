import bcryptjs from 'bcryptjs'
import User from '../Models/userModels.js'
import jwtToken from '../utils/jwtwebToken.js';


export const userRegister = async (req, res) =>{
    try {
const {fullname, username, email, gender, password, profilepic, } = req.body;  

const useralreadyexit = await User.findOne({username, email});

if(useralreadyexit) return res.status(500).send({success: false, message: 'username or email already exist'});

//hashing password
const hashPassword = bcryptjs.hashSync(password,10);
//we don't write await bcz hashsync will wait 

//dealing with profilepic
const profileBoy = profilepic || `https://avatar.iran.liara.run/public/boy?username=${username}`;

const profileGirl = profilepic || `https://avatar.iran.liara.run/public/girl?username=${username}`;


//newuser 

const newUser = await User.create({
    fullname, 
    username, 
    email, 
    gender, 
    password:hashPassword, 
    profilepic: gender === 'male' ? profileBoy: profileGirl
})

jwtToken(newUser._id, res); 

res.status(201).json({
    message: 'new user created',
    user: newUser.toJSON() // Convert the Sequelize instance to a plain object

})  

    } catch (error) {

        console.error('error creating user:', error);
        res.status(500).json({
            message: 'failed to create user',
            error: error.message
        })
        
    }
}








