import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Messages from '@/components/template/admin/Messages/Messages'
import React from 'react'
import MessageModel from '@/models/Message';

async function page() {
  const message = await MessageModel.find({})
  return (
    <AdminLayout>
        <Messages messages={message}/>
    </AdminLayout>
  )
}

export default page