import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar'
import Contact from '@/components/template/contactMe/Contact/Contact'
import { authUser } from '@/utils/serverHelpers';
import React from 'react'

export const metadata = {
    title: "  تماس با ما |  دالوندی",
    description: "برنامه نویس فرانت اند ",
  };

async function page() {
  const user = await authUser()
  return (
    <>
    <Navbar isLogin={user?true:false}/>
    <Contact/>
    <Menubar/>
    </>
  )
}

export default page