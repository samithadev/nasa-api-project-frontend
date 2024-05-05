import React, { useState, useEffect } from "react";
import MarsRoverPhotos from "./components/MarsRoverPhotos";

function MarsRoverPhotosPage() {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(null);

  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    async function fetchAPIData() {
      const url =
        "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000" +
        `&api_key=${NASA_KEY}`;

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
    <div className=" h-screen">
      {data ? (
        <MarsRoverPhotos data={data} />
      ) : (
        <div className="loadingState">
          <h1>Loading...</h1>
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
    </div>
  );
}

export default MarsRoverPhotosPage;
