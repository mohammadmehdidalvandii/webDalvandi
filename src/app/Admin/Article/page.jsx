import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import AddArticle from '@/components/template/admin/AddArticle/AddArticle'
import Articles from '@/components/template/admin/Articles/Articles'
import React from 'react'

function page() {
  return (
   <AdminLayout>
        <Articles/>
        <AddArticle/>
   </AdminLayout>
  )
}

export default page