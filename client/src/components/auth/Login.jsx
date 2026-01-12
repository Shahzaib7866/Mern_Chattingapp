import React from 'react'
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';



const Login = () => {
  return (
    <div>
        <div>
            <div className='flex flex-col items-center justify-center mt-28'>
                <ChatBubbleOutlineIcon className='text-green-500 bg-gray-300'/>
                <h1 className='font-bold text-gray-500'>Welcome Back</h1>
                 <p className='text-gray-600'>Sign in to your Account</p>
            </div>

            <div className='flex flex-col items-center justify-center m-6'>
             
             <div className=''>
                <h1>Email</h1>
                <div>
                <MailOutlineIcon /> 
                <input type="email" name="" className='border mt-1 p-2 rounded-lg h-full w-auto' />
                </div>
                </div>

                 <div className='m-2'>
                <h1>Password</h1>
                <input type="password" name="" className='border p-2 mt-1 rounded-lg h-full w-auto' />
                </div>

                <button className='border px-20 py-1 rounded-lg text-white bg-green-400'>Sign-in</button>

                <p className='mt-4 text-gray-600'>Don't have an Account? Create one</p>

            </div>
        </div>
    </div>
  )
}

export default Login





