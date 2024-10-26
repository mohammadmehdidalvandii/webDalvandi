import connectToDB  from "@/config/db";
import SkillModel from "@/models/Skill";
import path from 'path';
import { writeFile } from "fs/promises";

export async function POST (req){
    try{
        connectToDB();

        const formData = await req.formData();

        const img = formData.get("img");

        // generate Buffer img
        const buffer = Buffer.from(await img.arrayBuffer());
        const fileName = Date.now() + img.name ;
        const imgPath = path.join(process.cwd() , 'public/uploads/' + fileName)

        await writeFile(imgPath , buffer);

        const skill = await SkillModel.create({
            img:`http://localhost:3000/uploads/${fileName}`
        });

        return Response.json(
            {message:"created Skill Successfully ✅" , data:skill},
            {status:201}
        )

    } catch(err){
        return Response.json(
            {message:"Error message Skill server" ,err},
            {status:500}
        )
    }
}