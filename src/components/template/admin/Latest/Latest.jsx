import ArticleCart from '@/components/module/ArticleCart/ArticleCart'
import ProjectCart from '@/components/module/ProjectCart/ProjectCart'
import React from 'react'

function Latest() {
  return (
    <section className="block my-12">
        <div className="container">
            <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-3">
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200 h-[400px] overflow-y-auto">
                    <h6 className="block font-iranBold text-lg text-secondary-100 mb-4">آخرین پروژه</h6>
                    <ProjectCart/>
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200 h-[400px] overflow-y-auto">
                    <h6 className="block font-iranBold text-lg text-secondary-100 mb-4">آخرین بلاگ</h6>
                    <ArticleCart/>
                </div>
                <div className="block bg-white rounded-lg p-4 shadow-xl shadow-font-200 h-[400px] overflow-y-auto">
                    <h6 className="block font-iranBold text-lg text-secondary-100 mb-4"> تماس ها</h6>
                    <div className="flex justify-between items-center">
                        <span className="block">یاس دالوندی</span>
                        <div className="flex gap-4">
                            <button className="btn_primary">مشاهده پیام</button>
                            <button className="flex justify-center items-center w-[120px] h-10 rounded-lg bg-red-700 text-white text-lg duration-300 hover:bg-red-500">حذف</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Latest