import mongoose from "mongoose";
import User from '../Models/userModels.js'


const messageSchema = new mongoose.Schema(
    {
         senderId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
       
   receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            required: true,
            ref: 'User',
        },
        
        message: {
            type: String,
            required: true
          
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
        timestamps: true, 
    }
);

const Message = mongoose.model('message', messageSchema);

export default Message










