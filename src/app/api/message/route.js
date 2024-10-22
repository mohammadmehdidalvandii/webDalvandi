import connectToDB from "@/config/db";
import MessageModel from "@/models/Message";

export async function POST (req){
    try{
        connectToDB();
        const body = await req.json();
        const {
            username,
            phone,
            email,
            text,
        } = body;

        await MessageModel.create({
            username,
            phone,
            email,
            text,
        });

        return Response.json(
            {message: "Message Successfully ✅"},
            {status:201}
        )

    }catch(err){
        return Response.json(
            {message:"Error Message Server =>" ,err},
            {status:500}
        )
    }
}