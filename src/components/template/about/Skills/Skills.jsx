import React from 'react'

function Skills() {
  return (
    <section className="block mt-12 mb-8">
        <div className="container">
            <div className="block">
                <h4 className="block text-center font-iranBlack text-3xl">تخصص های من</h4>
            </div>
            <div className="grid gap-6 mt-12 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/vscode.svg" alt="skill" className="block" />
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/html.svg" alt="skill" className="block" />
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/css.svg" alt="skill" className="block" />
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/js.svg" alt="skill" className="block" />
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/git.svg" alt="skill" className="block" />
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/bootstrap.svg" alt="skill" className="block" />
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/tailwind.svg" alt="skill" className="block" />
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/react.svg" alt="skill" className="block" />
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/next.svg" alt="skill" className="block" />
                </div>
                <div className="flex items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/ts.svg" alt="skill" className="block" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills