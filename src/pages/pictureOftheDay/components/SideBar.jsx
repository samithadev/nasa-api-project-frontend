import React from "react";

function SideBar(props) {
  const { data } = props;

  return (
    <div className=" fixed right-5 ml-5 top-5 h-2/3 rounded-2xl md:w-1/4 bg-slate-500 p-10  ">
      <h2>{data?.title}</h2>
      <p>Description</p>
      <p>{data?.date}</p>
      <div className=" mt-6 overflow-y-auto h-3/4">
        <p>{data?.explanation}</p>
      </div>
    </div>
  );
}

export default SideBar;
