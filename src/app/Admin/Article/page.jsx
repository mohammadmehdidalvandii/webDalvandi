import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Articles from '@/components/template/admin/Articles/Articles'
import React from 'react'

function page() {
  return (
   <AdminLayout>
        <Articles/>
   </AdminLayout>
  )
}

export default page