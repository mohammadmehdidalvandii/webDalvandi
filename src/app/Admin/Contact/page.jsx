import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Messages from '@/components/template/admin/Messages/Messages'
import React from 'react'

function page() {
  return (
    <AdminLayout>
        <Messages/>
    </AdminLayout>
  )
}

export default page