import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Boxes from '@/components/template/admin/Boxes/Boxes'
import Latest from '@/components/template/admin/Latest/Latest'
import React from 'react'
import ProjectModel from '@/models/Project'
import ArticleModel from '@/models/Article'
import MessageModel from '@/models/Message'

async function page() {
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