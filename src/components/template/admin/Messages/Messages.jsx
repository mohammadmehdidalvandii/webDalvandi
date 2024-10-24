import React from "react";

function Messages() {
  return (
    <section className="block my-12">
      <div className="container">
        <div className="block">
          <h6 className="title text-right">پیام های شما</h6>
        </div>
        <div className="block mt-8 bg-white rounded-lg shadow-xl shadow-font-200 p-4">
          <table className="min-w-full border border-font-300">
            <thead>
              <tr class="bg-gray-200 text-gray-600">
                <th class="py-2 px-4 border-b">نام</th>
                <th class="py-2 px-4 border-b">شماره همراه</th>
                <th class="py-2 px-4 border-b">ایمیل</th>
                <th class="py-2 px-4 border-b">پیام</th>
                <th class="py-2 px-4 border-b">عملیات</th>
              </tr>
            </thead>
            <tbody>
              <tr class="hover:bg-gray-100 text-center">
                <td class="py-2 px-4 border-b">علی</td>
                <td class="py-2 px-4 border-b">09123456789</td>
                <td class="py-2 px-4 border-b">ali@example.com</td>
                <td class="py-2 px-4 border-b">
                    <button className="btn_secondary mx-auto">مشاهده پیام</button>
                </td>
                <td class="py-2 px-4 border-b">
                  <button class="btn_red mx-auto">
                    حذف
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}

export default Messages;
