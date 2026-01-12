import mongoose from "mongoose";
import User from '../Models/userModels.js'

const conversationSchema = new mongoose.Schema(
    {
         members: [
            {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
        }
    ],
        
        messages: [{
            type: String,
            required: true,
            default: []
          
        }],

    },
    {
        timestamps: true, 
    }
);

const Conversation = mongoose.model('Conversation', conversationSchema);

export default Conversation














