import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar'
import Projects from '@/components/template/projects/Projects'
import React from 'react'

export const metadata = {
  title: "  پروژه ها |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

function page() {
  return (
    <>
    <Navbar/>
    <Projects/>
    <Menubar/>
    </>
  )
}

export default page