import React from 'react'

function About() {
  return (
    <section className="block mt-12 mb-8">
        <div className="container">
            <div className="block">
                <h6 className="block font-iranBlack text-2xl">تخصص های من</h6>
            </div>
            <div className="grid gap-6 mt-12 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <div className="flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/vscode.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
                <div className="flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/html.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
                <div className="flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/css.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
                <div className="flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/js.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
                <div className="flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/git.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
                <div className="flex flex-col items-center justify-between bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/bootstrap.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/tailwind.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/react.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/next.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
                <div className="flex flex-col items-center justify-center bg-white p-4 rounded-lg shadow-md shadow-font-200">
                    <img src="/assets/images/ts.svg" alt="skill" className="block" />
                    <button className="btn_red mt-8">حذف</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About