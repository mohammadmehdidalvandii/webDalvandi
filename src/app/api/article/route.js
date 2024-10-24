import connectToDB from "@/config/db";
import ArticleModel from '@/models/Article';

import path from 'path';
import { writeFile } from "fs/promises";


export async function POST (req){
    try{
        connectToDB();

        const formData = await req.formData();

        const name = formData.get("name");
        const paragraph = formData.get("paragraph");
        const img = formData.get("img");

        // generate Buffer img

        const bufferImg = Buffer.from(await img.arrayBuffer());
        const fileName = Date.now() + img.name;
        const imgPath = path.join(process.cwd(), "public/uploads/" + fileName)

        await writeFile(imgPath , bufferImg);

        const article = await ArticleModel.create({
            name,
            paragraph,
            img:`http://localhost:3000/uploads/${fileName}`,
        })

        return Response.json(
            {message:"Created Article is Successfully" , data:article}  ,
            {status:201}
        )

    }catch(err){
        console.log("Error message =>" , err);
        return Response.json(
            {message:"Error Article Server =>" , err},
            {status:500}
        )
    }
}