const jwt=require("jsonwebtoken")

exports.generateToken=(user)=>{

    return jwt.sign(
        {email:user.email, id:user._id},
         process.env.jwt_SECRET,
         {expiresIn:'1h'}
    )
}