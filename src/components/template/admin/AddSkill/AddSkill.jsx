import React from "react";

function AddSkill() {
  return (
    <section className="block mt-12 mb-8">
      <div className="container">
        <div className="block">
          <h6 className="block font-iranBlack text-2xl">افزودن مهارت</h6>
        </div>
        <div className="block mt-8 bg-white py-4 shadow-xl shadow-font-200 rounded-lg" >
            <form action="#" className="flex mr-4">
                <div className="block">
                    <label htmlFor="#" className="block text-lg mb-2">عکس مهارت</label>
                    <input type="file" name="" id="" />
                </div>
                    <button className="btn_primary">ثبت</button>
            </form>
        </div>
      </div>
    </section>
  );
}

export default AddSkill;
