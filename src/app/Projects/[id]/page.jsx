import Menubar from '@/components/module/MenuBar/Menubar';
import Navbar from '@/components/module/Navbar/Navbar'
import Banner from '@/components/template/ProjectSingle/Banner/Banner'
import Details from '@/components/template/ProjectSingle/Details/Details'
import React from 'react'
import ProjectModel from '@/models/Project';
import connectToDB from '@/config/db';

export const metadata = {
  title: "    جزئیات پروژه |  دالوندی",
  description: "برنامه نویس فرانت اند ",
};

async function page({params}) {
  await connectToDB();

  const projectID  = params.id
  const project = await ProjectModel.findOne({_id:projectID})

  return (
    <>
    <Navbar/>
    <Banner images={project.img}/>
    <Details projects={project}/>
    <Menubar/>
    </>
  )
}

export default page