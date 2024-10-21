import { hash ,compare } from "bcryptjs";
import { sign , verify } from "jsonwebtoken";

// Logic Hash Password 
const hashPassword = async (password)=>{
    const hashedPassword = await hash(password , 12);
    return hashedPassword
}

// Logic Verify Password 
const verifyPassword = async (password , hashedPassword)=>{
    const isValid = await compare(password , hashedPassword);
    return isValid
}

// Logic Created Access Token 
const generateAccessToken = (data)=>{
    const token = sign({...data} , process.env.ACCESS_TOKEN_SC,{
        expiresIn :"10d"
    });
    return token
}

const verifyAccessToken = (token)=>{
    try{
        const tokenPayload = verify(token , process.env.ACCESS_TOKEN_SC);
        return tokenPayload
    }catch(err){
        console.log("Verify Access Token Error =>" , err)
        return false
    }
}

// Logic Created Refresh Token 
const generateRefreshToken = (data)=>{
    const token = sign({...data}, process.env.Refresh_TOKEN_SC,{
        expiresIn :"5d"
    })
    return token;
}

const validEmail = (email)=>{
    const pattern = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/g;
    return pattern.test(email);
}

// Logic Validation Email
const validPassword = (password)=>{
    const pattern =
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/g;
  return pattern.test(password);
}

export {
    hashPassword,
    verifyPassword,
    generateAccessToken,
    verifyAccessToken,
    generateRefreshToken,
    validEmail,
    validPassword,
}