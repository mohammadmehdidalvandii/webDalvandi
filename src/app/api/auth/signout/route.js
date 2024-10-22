import { cookies } from "next/headers";

export async function POST (){
    cookies().get("token");
    return Response.json(
        {message:"Logout is Done ✅"}
    )
}