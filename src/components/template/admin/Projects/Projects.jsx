import Link from "next/link"
import React from 'react'

function Projects({projects}) {
  return (
    <section className="block my-12 h-[600] overscroll-y-auto">
<div className="container">
    <div className="block">
        <h4 className="block font-iranBlack text-4xl text-font-300">پروژه های من</h4>
    </div>
    <div className="grid mt-12 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projects.slice().reverse().map(project=>(
        <div className="block bg-white rounded-lg p-4" key={project._id}>
            <img src={project.img[0]} alt="" className="block" />
            <div className="flex justify-between mt-12">
                <Link href={`/Projects/${project.name}`} className="btn_primary">مشاهده پروژه</Link>
                <button className="btn_red">حذف پروژه</button>
            </div>
        </div>
        ))}
    </div>
</div>
</section>
  )
}

export default Projects