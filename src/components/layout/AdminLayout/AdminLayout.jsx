import Topbar from '@/components/module/Topbar/Topbar'
import React from 'react'

function AdminLayout({children}) {
  return (
    <>
    <Topbar/>
    {children}
    </>
  )
}

export default AdminLayout