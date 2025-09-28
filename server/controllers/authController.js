export const userRegister = async () =>{
    try {
const {fullname, username, email, gender, passsword, profilepic, } = req.body;  

const useralreadyexit = await User.findOne({username, email});

if(user) return res.send(500).send({success: false})
        
    } catch (error) {
        
    }
}





