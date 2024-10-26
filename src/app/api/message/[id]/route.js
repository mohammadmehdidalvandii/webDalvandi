import connectToDB from "@/config/db";
import MessageModel from '@/models/Message';

export async function DELETE (req , {params}){
    try{
        connectToDB()

        // get id message 
        const messageID = params.id;
        
        await MessageModel.findOneAndDelete({
            _id:messageID
        });

        return Response.json(
            {message:"Message Removed Successfully ✅"},
            {status:200}
        )

    } catch(err){
        return Response.json(
            {message:"Error delete message server", err},
            {status:500}
        )
    }
}