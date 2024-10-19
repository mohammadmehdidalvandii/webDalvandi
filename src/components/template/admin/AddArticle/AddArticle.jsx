import React from 'react'

function AddArticle() {
  return (
    <section className="block my-12">
        <div className="container">
            <div className="block">
            <h6 className="block font-iranBlack text-2xl">افزودن مقاله</h6>
            </div>
            <div className="block mt-8 bg-white shadow-xl shadow-font-200 p-4 rounded-lg">
                <form action="#" className="block">
                    <div className="block mb-6">
                        <label htmlFor="" className='block font-iranBold text-sm mb-3'>نام مقاله</label>
                        <input type="text" className="block w-full h-12 border border-font-300 pr-3 mt-3 rounded-md outline-secondary-100" />
                    </div>
                    <div className="block mb-6">
                        <label htmlFor="" className='block font-iranBold text-sm mb-3'>متن  مقاله (برای جدا سازی پراگرف از - استفاده کنید)</label>
                        <textarea type="text" className="block w-full h-[500px] border border-font-300 pr-3 mt-3 rounded-md outline-secondary-100" />
                    </div>
                    <div className="block mb-6">
                        <label htmlFor="" className='block font-iranBold text-sm mb-3'>نام مقاله</label>
                        <input type="file" className="block" />
                    </div>
                    <button className="btn_secondary w-full">ثبت</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AddArticle