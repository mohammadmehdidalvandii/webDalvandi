import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import Messages from '@/components/template/admin/Messages/Messages'
import React from 'react'
import MessageModel from '@/models/Message';
import connectToDB from '@/config/db';

async function page() {
  await connectToDB ()
  const message = await MessageModel.find({})
  return (
    <AdminLayout>
        <Messages messages={message}/>
    </AdminLayout>
  )
}

export default page