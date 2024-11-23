import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Boxes from '@/components/template/admin/Boxes/Boxes'
import Latest from '@/components/template/admin/Latest/Latest'
import React from 'react'
import ProjectModel from '@/models/Project'
import ArticleModel from '@/models/Article'
import MessageModel from '@/models/Message'
import connectToDB from '@/config/db'
import dotenv from 'dotenv';
dotenv.config()

async function page() {
  await connectToDB()
  const project = await ProjectModel.find({})
  const article = await ArticleModel.find({})
  const message = await MessageModel.find({})
  return (
    <>
        <AdminLayout>
          <Boxes/>
          <Latest project={project} article={article} message={message}/>
        </AdminLayout>
    </>
  )
}

export default page