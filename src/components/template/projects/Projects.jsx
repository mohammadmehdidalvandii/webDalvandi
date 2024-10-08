import ProjectCart from '@/components/module/ProjectCart/ProjectCart'
import React from 'react'

function Projects() {
  return (
    <section className="block mt-12 mb-8"> 
       <div className="container">
       <div className="block">
            <h5 className="block text-center font-iranBlack text-3xl text-font-300">پروژه های من</h5>
        </div>
        <div className="grid mt-12 gap-6 xs:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
            <ProjectCart/>
            <ProjectCart/>
            <ProjectCart/>
            <ProjectCart/>
            <ProjectCart/>
        </div>
       </div>
    </section>
  )
}

export default Projects