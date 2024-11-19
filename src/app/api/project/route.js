import connectToDB from "@/config/db";
import ProjectModel from "@/models/Project";
import path from "path";
import { writeFile, mkdir } from "fs/promises";

export async function POST(req) {
  try {
    connectToDB();

    const formData = await req.formData();

    const name = formData.get("name");
    const techs = formData.get("techs");
    const description = formData.get("description");
    const onlineLink = formData.get("onlineLink");
    const github = formData.get("github");
    const img = formData.getAll("img[]");
    const sourceCode = formData.get("sourceCode");

    // ایجاد پوشه uploads در صورت عدم وجود
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await mkdir(uploadDir, { recursive: true });

    // ذخیره تصاویر
    const imgUrls = [];
    for (const file of img) {
      const bufferImg = Buffer.from(await file.arrayBuffer());
      const fileName = Date.now() + path.extname(file.name); // اضافه کردن پسوند فایل
      const imgPath = path.join(uploadDir, fileName);
      await writeFile(imgPath, bufferImg);
      imgUrls.push(`https://web-dalvandi.chbk.app/uploads/${fileName}`);
    }

    // ذخیره سورس کد
    const bufferSourceCode = Buffer.from(await sourceCode.arrayBuffer());
    const codeName = Date.now() + path.extname(sourceCode.name); // اضافه کردن پسوند فایل
    const sourceCodePath = path.join(uploadDir, codeName);
    await writeFile(sourceCodePath, bufferSourceCode);

    // ایجاد پروژه در دیتابیس
    const project = await ProjectModel.create({
      name,
      techs,
      description,
      onlineLink,
      github,
      img: imgUrls, // ذخیره URLهای تصاویر
      sourceCode: `https://web-dalvandi.chbk.app/uploads/${codeName}`,
    });

    return Response.json(
      { message: "Created Project is Successfully ✅", data: project },
      { status: 201 }
    );

  } catch (err) {
    console.log("Error =>", err);
    return Response.json(
      { message: "Error Project Server =>", err },
      { status: 500 }
    );
  }
}

