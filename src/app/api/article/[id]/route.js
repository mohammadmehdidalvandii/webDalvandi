import connectToDB from "@/config/db";
import ArticleModel from '@/models/Article';

export async function DELETE (req, {params}){
    try{
        connectToDB()

        const ArticleID = params.id;

        await ArticleModel.findOneAndDelete({
            _id:ArticleID
        });

        return Response.json(
            {message:"Removed Article Successfully ✅"},
            {status:200}
        )

    } catch(err){
        return Response.json(
            {message:"Error server Remove Article"},
            {status:500}
        )
    }
}