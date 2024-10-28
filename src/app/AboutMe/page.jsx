import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar';
import About from '@/components/template/about/About/About';
import Skills from '@/components/template/about/Skills/Skills';
import React from 'react'
import { authUser } from '@/utils/serverHelpers';

export const metadata = {
    title: "  درباره من |  دالوندی",
    description: "برنامه نویس فرانت اند ",
  };

 
async function page() {
  const user = await authUser()

  return (
    <>
        <Navbar isLogin={user ? true :false}/>
        <About/>
        <Skills/>
        <Menubar/>
    </>
  )
}

export default page