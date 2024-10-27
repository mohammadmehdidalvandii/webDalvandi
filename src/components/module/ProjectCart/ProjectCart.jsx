import Link from "next/link";
import React from "react";

function ProjectCart({img , name , id}) {
  return (
    <Link href={`/Projects/${id}`} className="block  bg-white p-4 rounded-lg shadow-md shadow-font-200 text-font-300 cursor-pointer duration-300 hover:bg-secondary-100 hover:text-white">
      <img src={img} alt="project img" className="block" />
      <h6 className="block text-center mt-6 font-iranBold text-xl ">
        {name}
      </h6>
    </Link>
  );
}

export default ProjectCart;
