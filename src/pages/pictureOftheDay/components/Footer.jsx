import React from "react";

function Footer(props) {
  const { data } = props;

  return (
    <footer className=" fixed bottom-6 left-6 mr-6 rounded-2xl  py-5 px-5 gap-20 flex items-center bg-slate-500 bg-opacity-50 text-white font-orbitron font-bold">
      <div>
        <h2>{data?.title}</h2>
        <h1>Copyright: {data?.copyright}</h1>
      </div>
      <button>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
}

export default Footer;
