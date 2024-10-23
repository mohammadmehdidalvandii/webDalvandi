import connectToDB from "@/config/db";
import ProjectModel from "@/models/Project";
import path from "path";
import { writeFile } from "fs/promises";

export async function POST(req) {
  try {
    connectToDB();

    const formData =await req.formData();

    const name = formData.get("name");
    const techs = formData.get("techs");
    const description = formData.get("description");
    const onlineLink = formData.get("onlineLink");
    const github = formData.get("github");
    const img = formData.get("img");
    const sourceCode = formData.get("sourceCode");

    // generate Buffer for img

    const bufferImg  = Buffer.from(await img.arrayBuffer());
    const fileName = Date.now() + img.name;
    const imgPath = path.join(process.cwd(), "public/uploads" + fileName);

    await writeFile(imgPath , bufferImg);

     // generate Buffer for sourceCode

     const bufferSourceCode = Buffer.from(await sourceCode.arrayBuffer());
     const codeName = Date.now() + sourceCode.name;
     const sourceCodePath = path.join(process.cwd() , "public/uploads" + codeName)

     await writeFile(sourceCodePath , bufferSourceCode)

    const project = await ProjectModel.create({
        name,
        techs,
        description,
        onlineLink,
        github,
        img: `http://localhost:3000/uploads/${fileName}`,
        sourceCode:`http://localhost:3000/uploads/${codeName}`,
    });

    return Response.json(
        {message : "Created Project is Successfully ✅" ,data:project},
        {status:200}
    );

  } catch (err) {
      console.log("Error =>" ,err);
    return Response.json(
      { message: "Error Project Server =>", err },
      { status: 500 }
    );
  }
}
