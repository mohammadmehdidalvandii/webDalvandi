import AdminLayout from '@/components/layout/AdminLayout/AdminLayout'
import About from '@/components/template/admin/About/About'
import AddSkill from '@/components/template/admin/AddSkill/AddSkill'
import React from 'react'

function page() {
  return (
    <AdminLayout>
        <About/>
        <AddSkill/> 
    </AdminLayout>
  )
}

export default page