import React, { useEffect, useState } from "react";
import SideBar from "./components/SideBar";
import Main from "./components/Main";
import Footer from "./components/Footer";

function PictureOftheDay() {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(null);

  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    async function fetchAPIData() {
      const url =
        "https://api.nasa.gov/planetary/apod" + `?api_key=${NASA_KEY}`;

      try {
        const res = await fetch(url);
        const apiData = await res.json();

        setdata(apiData);
        console.log("DATA:\n", apiData);
      } catch (error) {
        console.log(error.message);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <div className=" flex min-h-screen ">
      {data ? (
        <Main data={data} />
      ) : (
        <div className="loadingState">
          <h1>Loading...</h1>
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
      <SideBar data={data} />
      <Footer data={data} />
    </div>
  );
}

export default PictureOftheDay;
