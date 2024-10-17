import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Boxes from '@/components/template/admin/Boxes/Boxes'
import Latest from '@/components/template/admin/Latest/Latest'
import React from 'react'

function page() {
  return (
    <>
        <AdminLayout>
          <Boxes/>
          <Latest/>
        </AdminLayout>
    </>
  )
}

export default page