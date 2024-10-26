import connectToDB from "@/config/db";
import SkillModel from '@/models/Skill';

export async function DELETE (req ,{params}){
    try{
        connectToDB();

        const skillID = params.id

        await SkillModel.findOneAndDelete({
            _id:skillID,
        });

        return Response.json(
            {message:"Removed Successfully skill ✅"},
            {status:200}
        );


    } catch(err){
        return Response.json(
            {message:"Error message server deleted Skill" , err},
            {status:500}
        )
    }
}