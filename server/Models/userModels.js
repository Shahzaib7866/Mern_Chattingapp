import mongoose from "mongoose";


// Define the User Schema
const userSchema = new mongoose.Schema(
    {
         fullname: {
            type: String,
            required: [true, 'Please add a username'], // Must be provided
            unique: true, // No two users can have the same username
            trim: true, // Removes whitespace from both ends
        },
       
        username: {
            type: String,
            required: [true, 'Please add a username'], // Must be provided
            unique: true, // No two users can have the same username
            trim: true, // Removes whitespace from both ends
            minlength: 3, // Minimum length of 3 characters
        },
        
        email: {
            type: String,
            required: [true, 'Please add an email'],
            unique: true,
            trim: true,
            match: [
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                'Please fill a valid email address'
            ], // Simple regex for email validation
        },

            gender: {
            type: String,
            required: [true, 'Please add an email'],
             enum: ['male','female'],
            unique: true,
            trim: true,
         
        },
        
        password: {
            type: String,
            required: [true, 'Please add a password'],
            minlength: 6, // Enforcing a minimum security standard
        },

       
        isAdmin: {
            type: Boolean,
            default: false, // Default role is a regular user
        },

            profilepic: {
            type: String,
            required: true,
            default: "" //koi user profilepic nhi lagana chhahta
        },

    },
    {
        // Mongoose automatically adds `createdAt` and `updatedAt` timestamps
        timestamps: true, 
    }
);

// Create the model from the schema and export it
const User = mongoose.model('User', userSchema);

module.exports = User;