import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Boxes from '@/components/template/admin/Boxes/Boxes'
import React from 'react'

function page() {
  return (
    <>
        <AdminLayout>
          <Boxes/>
        </AdminLayout>
    </>
  )
}

export default page