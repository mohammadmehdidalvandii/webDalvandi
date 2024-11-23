import Topbar from '@/components/module/Topbar/Topbar'
import { authUser } from '@/utils/serverHelpers'
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import React from 'react'

async function AdminLayout({children}) {

  const user = await authUser();

  // get token User 
  const token = cookies().get("token");
  if(!token){
    return redirect("/Login");
  }else if(token){
    if(user.role !== "ADMIN"){
      swal({
        title:"شما به این صفحه دسترسی ندارید !",
        icon:"error",
        button:"باشه"
      }).then(()=>{
        return redirect("/Login")
      })
    }
  }

  return (
    <>
    <Topbar name={user.name}/>
    {children}
    </>
  )
}

export default AdminLayout