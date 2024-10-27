import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import AddProject from '@/components/template/admin/AddProject/AddProject'
import Projects from '@/components/template/admin/Projects/Projects'
import React from 'react'
import ProjectModel from '@/models/Project';
import connectToDB from '@/config/db';

async function page() {
    await connectToDB()
    const projects = await ProjectModel.find({})
  return (
    <AdminLayout>
        <Projects projects={projects}/>
        <AddProject/>
    </AdminLayout>
  )
}

export default page