import React from 'react'

function Boxes() {
  return (
    <section className="block my-12">
        <div className="container">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200">
                    <h6 className="block text-center font-iranBlack text-2xl text-font-300">پروژه های من</h6>
                    <span className="block text-center text-3xl text-secondary-default mt-3">0</span>
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200">
                    <h6 className="block text-center font-iranBlack text-2xl text-font-300">بلاگ های من</h6>
                    <span className="block text-center text-3xl text-secondary-default mt-3">0</span>
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200">
                    <h6 className="block text-center font-iranBlack text-2xl text-font-300">تماس با من</h6>
                    <span className="block text-center text-3xl text-secondary-default mt-3">0</span>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Boxes