import React from "react";
import { Link } from "react-router-dom";

function Main(props) {
  const { data } = props;

  return (
    <div className="w-screen h-screen">
      <Link to={"/main/home"} className="fixed top-6 left-6">
        <i
          className="fa-solid fa-circle-arrow-left fa-2xl"
          style={{ color: "white" }}
        ></i>
      </Link>
      {data?.media_type === "video" ? (
        <iframe
          className="absolute w-full h-full object-cover "
          src={data?.url}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title={data?.title}
        ></iframe>
      ) : (
        <img
          className="absolute w-full h-full object-cover z-[-1]"
          src={data?.hdurl}
          alt="bg-img"
        />
      )}
    </div>
  );
}

export default Main;
