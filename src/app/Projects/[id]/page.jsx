import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar'
import Banner from '@/components/template/ProjectSingle/Banner/Banner'
import Details from '@/components/template/ProjectSingle/Details/Details'
import React from 'react'
import ProjectModel from '@/models/Project';
import connectToDB from '@/config/db';
import { authUser } from '@/utils/serverHelpers';


export const metadata = {
  title: "    جزئیات پروژه |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

async function page({params}) {
  const user = await authUser()
  await connectToDB();
  const projectID  = params.id
  const project = await ProjectModel.findOne({_id:projectID})

  return (
    <>
    <Navbar isLogin={user?true:false}/>
    <Banner images={project.img}/>
    <Details projects={project}/>
    <Menubar/>
    </>
  )
}

export default page