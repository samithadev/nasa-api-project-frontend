import React from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";

function MainSection(props) {
  const { data } = props;

  // Settings for the slider
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentIndex(index),
  };

  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentPhoto = data[currentIndex];

  return (
    <div className="flex flex-col items-center   bg-black text-white w-screen h-screen lg:h-screen py-9 lg:py-6">
      <Link to={"/main/home"} className=" fixed top-6 left-6">
        <i
          className="fa-solid fa-circle-arrow-left fa-2xl"
          style={{ color: "white" }}
        ></i>
      </Link>
      <h1 className="text-center font-orbitron text-3xl font-bold pb-8">
        Daily Earth Images
      </h1>
      <div className="flex flex-col lg:flex-row w-2/3 lg:w-full lg:px-32 lg:gap-10 lg:h-screen lg:items-center justify-center  space-x-4  ">
        <div className="w-full lg:w-1/2">
          <Slider {...settings}>
            {data &&
              data.map((item, index) => (
                <div key={index} className="outline-none">
                  <img
                    src={`https://epic.gsfc.nasa.gov/archive/natural/${
                      item.date.replace(/-/g, "/").split(" ")[0]
                    }/png/${item.image}.png`}
                    alt="EPIC Image"
                  />
                </div>
              ))}
          </Slider>
        </div>

        <div className="w-full lg:w-1/2  ">
          <div className="ml-4 p-4 shadow-lg rounded bg-gray-800 bg-opacity-50">
            <h2 className="text-lg font-semibold">Photo Details</h2>
            <p>
              <strong>Date:</strong> {currentPhoto.date}
            </p>
            <p>
              <strong>Latitude: {currentPhoto.centroid_coordinates.lat}</strong>
              <br />
              <strong>
                Longitude: {currentPhoto.centroid_coordinates.lon}
              </strong>
            </p>
          </div>
        </div>
      </div>

      {/* <h2>Date: {item.date}</h2>

      <p>Latitude: {item.centroid_coordinates.lat}</p>
      <p>Longitude: {item.centroid_coordinates.lon}</p> */}
    </div>
  );
}

export default MainSection;
