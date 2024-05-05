import React, { useState, useEffect } from "react";
import MainSection from "./components/MainSection";

function EarthDailyImageryPage() {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;

  useEffect(() => {
    async function fetchAPIData() {
      const url = ` https://api.nasa.gov/EPIC/api/natural/images?api_key=${NASA_KEY} `;

      try {
        const res = await fetch(url);
        const apiData = await res.json();

        setdata(apiData);
        console.log("DATA:\n", apiData);
        setloading(false);
      } catch (error) {
        console.log(error.message);
        setloading(false);
      }
    }

    fetchAPIData();
  }, []);

  return (
    <div className=" h-screen">
      {data ? (
        <MainSection data={data} />
      ) : (
        <div className="loadingState">
          <h1>Loading...</h1>
          <i className="fa-solid fa-gear"></i>
        </div>
      )}
    </div>
  );
}

export default EarthDailyImageryPage;
