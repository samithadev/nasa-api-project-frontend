import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  const { data } = props;
  return (
    <div className=" w-screen h-screen ">
      <Link to={"/main/home"} className=" fixed top-6 left-6">
        <i
          className="fa-solid fa-circle-arrow-left fa-2xl"
          style={{ color: "white" }}
        ></i>
      </Link>
      <img
        className=" absolute w-full h-full object-cover z-[-1]"
        src={data?.hdurl}
        alt={"bg-img"}
      />
    </div>
  );
}

export default Main;
