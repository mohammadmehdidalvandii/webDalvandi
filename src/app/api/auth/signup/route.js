import connectToDB from "@/config/db";
import UserModel from '@/models/User';
import { generateAccessToken , hashPassword } from "@/utils/auth";

export async function POST (req){
    connectToDB();
    const body = await req.body;
    const {name  , email , password}= body;

    // Validation
    const isUserExist = await UserModel.findOne({
        $or:[{name} , {email} , {phone}],
    });

    if(isUserExist){
        return Response.json(
            {message:"Username or Email or Phone EXIST already !!"},
            {status:422},
        );
    }

    const hashedPassword = await hashPassword(password);
    const accessToken = generateAccessToken({name});

    const users = await UserModel.find({});

    await UserModel.create({
        name,
        email,
        phone,
        password:hashedPassword,
        role: users.length> 0 ?"USER" : "ADMIN",
    });

    return Response.json(
        {message: "User signed Up Successfully ✅"},
        {
            status:201,
            headers:{"Set-Cookie":`token=${accessToken};path=/;httpOnly=true;`}
        }
    )


}