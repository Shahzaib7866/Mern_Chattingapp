import mongoose from "mongoose";



const userSchema = new mongoose.Schema(
    {
         fullname: {
            type: String,
            required: [true, 'Please add a username'], 
            trim: true,
        },
       
        username: {
            type: String,
            required: [true, 'Please add a username'],
            unique: true, 
            trim: true, 
            minlength: 3, 
        },
        
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
            trim: true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                'Please fill a valid email address'
            ],
        },

            gender: {
            type: String,
            enum: ['male','female'],         
        },
        
        password: {
            type: String,
            required: [true, 'Please add a password'],
            minlength: 6, 
        },

       
        isAdmin: {
            type: Boolean,
            default: false,
        },

            profilepic: {
            type: String,
            required: true,
            default: ""
        },

    },
    {
        timestamps: true, 
    }
);

const User = mongoose.model('User', userSchema);

export default User

