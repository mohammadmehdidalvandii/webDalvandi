import React from 'react'

function AddProject() {
  return (
    <section className="block my-12 ">
        <div className="container">
            <div className="block">
                <h4 className="block font-iranBold text-3xl"> افزودن پروژه جدید</h4>
            </div>
            <div className="block gap-6 mt-8 bg-white p-4 rounded-lg shadow-xl shadow-font-200">
                <form action="#" className="block w-full">
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>نام پروژه</label>
                        <input type="text" className="block w-full h-12 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2" />
                    </div>
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>تکنولوژِی ها</label>
                        <input type="text" className="block w-full h-12 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2" />
                    </div>
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>توضیحات </label>
                        <textarea type="text" className="block w-full h-28 pt-2 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2" />
                    </div>
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>لینک نمایش انلاین</label>
                        <input type="text" className="block w-full h-12 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2" />
                    </div>
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>لینک  گیت هاب</label>
                        <input type="text" className="block w-full h-12 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2" />
                    </div>
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>لینک نمایش انلاین</label>
                        <input type="text" className="block w-full h-12 mt-2 outline-secondary-100 rounded-md border border-font-300 pr-2" />
                    </div>
                    <div className="flex mt-4">
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>عکس 1</label>
                        <input type="file" className="block w-full h-12 mt-2" />
                    </div>
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>عکس 2</label>
                        <input type="file" className="block w-full h-12 mt-2" />
                    </div>
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>عکس 3</label>
                        <input type="file" className="block w-full h-12 mt-2" />
                    </div>
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'>عکس 4</label>
                        <input type="file" className="block w-full h-12 mt-2" />
                    </div>

                    </div>
                    <div className="block w-full mb-4">
                        <label htmlFor="#" className='block'> سورس کد </label>
                        <input type="file" className="block w-full h-12 mt-2" />
                    </div>
                    <button className="btn_secondary w-full">افزودن</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default AddProject