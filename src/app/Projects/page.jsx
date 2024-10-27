import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar'
import Projects from '@/components/template/projects/Projects'
import connectToDB from '@/config/db';
import React from 'react'
import ProjectModel from '@/models/Project';

export const metadata = {
  title: "  پروژه ها |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

async function page() {
  await connectToDB();
  const projects = await ProjectModel.find({})
  return (
    <>
    <Navbar/>
    <Projects projects={projects}/>
    <Menubar/>
    </>
  )
}

export default page