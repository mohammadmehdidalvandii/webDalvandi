import React from 'react'

function About({skills}) {
  return (
    <section className="block mt-12 mb-8">
        <div className="container">
            <div className="block">
                <h6 className="block font-iranBlack text-2xl">تخصص های من</h6>
            </div>
            <div className="grid gap-6 mt-12 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                {skills.map(skill=>(
                         <div className="flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md shadow-font-200" key={skill.id}>
                         <img src={skill.img}alt="skill" className="block" />
                         <button className="btn_red mt-8">حذف</button>
                     </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default About