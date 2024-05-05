import React from "react";

function SideBar(props) {
  const { data } = props;

  return (
    <div className=" fixed right-5 ml-5 top-16 h-2/3 rounded-2xl md:w-1/2 lg:w-1/3 bg-slate-500 p-10 text-white bg-opacity-50">
      <div className=" font-orbitron font-bold">
        <h2>{data?.title}</h2>
        <p>Description</p>
        <p className=" text-black">{data?.date}</p>
      </div>
      <div className=" mt-6 overflow-y-auto h-3/4 ">
        <p>{data?.explanation}</p>
      </div>
    </div>
  );
}

export default SideBar;
