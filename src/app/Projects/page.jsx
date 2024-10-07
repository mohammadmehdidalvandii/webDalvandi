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
    </>
  )
}

export default page