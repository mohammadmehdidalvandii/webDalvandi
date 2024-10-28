import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar'
import Projects from '@/components/template/projects/Projects'
import connectToDB from '@/config/db';
import React from 'react'
import ProjectModel from '@/models/Project';
import { authUser } from '@/utils/serverHelpers';

export const metadata = {
  title: "  پروژه ها |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

async function page() {
  const user = await authUser()
  await connectToDB();
  const projects = await ProjectModel.find({})
  return (
    <>
    <Navbar isLogin={user?true:false}/>
    <Projects projects={projects}/>
    <Menubar/>
    </>
  )
}

export default page