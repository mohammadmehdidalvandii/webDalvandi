import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar'
import Contact from '@/components/template/contactMe/Contact/Contact'
import React from 'react'

export const metadata = {
    title: "  تماس با ما |  دالوندی",
    description: "برنامه نویس فرانت اند ",
  };

function page() {
  return (
    <>
    <Navbar/>
    <Contact/>
    <Menubar/>
    </>
  )
}

export default page