import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from "react-router-dom";

function MarsRoverPhotos(props) {
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
  const currentPhoto = data.photos[currentIndex];

  return (
    <div className="flex flex-col items-center bg-black bg-opacity-50  text-white w-screen lg:h-screen ">
      <div className="absolute w-full h-full z-[-1]">
        <img src="/mars.jpg" alt="" className="w-full h-full object-cover" />
      </div>

      <Link to={"/main/home"} className=" fixed top-6 left-6">
        <i
          className="fa-solid fa-circle-arrow-left fa-2xl"
          style={{ color: "white" }}
        ></i>
      </Link>
      <h1 className="text-center pt-4 font-orbitron text-3xl font-bold pb-8">
        Mars Rover Photos
      </h1>
      <div className="flex flex-col lg:flex-row w-2/3 lg:w-full lg:px-32 lg:gap-10 lg:h-screen lg:items-center justify-center  space-x-4  ">
        <div className="w-full lg:w-1/2">
          <Slider {...settings}>
            {data.photos.map((photo) => (
              <div key={photo.id} className="outline-none">
                <img
                  src={photo.img_src}
                  alt={`Taken by ${photo.camera.full_name}`}
                  className="w-full object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full lg:w-1/2 mt-5 ">
          <div className="p-4 lg:p-8 shadow-lg rounded bg-gray-800 bg-opacity-50">
            <h2 className="text-lg font-semibold font-orbitron">
              {" "}
              <i className="fa-solid fa-circle-info"></i> Photo Details
            </h2>
            <p>
              <strong>ID:</strong> {currentPhoto.id}
            </p>
            <p>
              <strong>Camera:</strong> {currentPhoto.camera.full_name}
            </p>
            <p>
              <strong>Date Taken:</strong> {currentPhoto.earth_date}
            </p>
            <p>
              <strong>Rover:</strong> {currentPhoto.rover.name}
            </p>

            <h2 className=" mt-5 text-lg font-semibold font-orbitron">
              {" "}
              <i className="fa-solid fa-circle-info"></i> Rover Details
            </h2>
            <p>
              <strong>Name:</strong> {currentPhoto.rover.name}
            </p>
            <p>
              <strong>Status:</strong> {currentPhoto.rover.status}
            </p>
            <p>
              <strong>Landing Date:</strong> {currentPhoto.rover.landing_date}
            </p>
            <p>
              <strong>Launch Date:</strong> {currentPhoto.rover.launch_date}
            </p>
            <p>
              <strong>Total Photos Taken:</strong>{" "}
              {currentPhoto.rover.total_photos}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MarsRoverPhotos;
