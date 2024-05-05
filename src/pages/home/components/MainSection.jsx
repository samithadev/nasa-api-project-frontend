import React, { useState, useEffect } from "react";
import astroImg from "../../../assets/astro.png";
import { Link } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from "react-router-dom";

const words = ["Exploration", "Discovery", "Innovation"];

function MainSection() {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [username, setUsername] = useState("");

  const navigate = useNavigate();

  function type() {
    // Current word
    const currentWord = words[wordIndex];

    // Determine the function to be performed
    const shouldDelete = isDeleting ? 1 : -1;

    // Create the new text
    setText((current) =>
      currentWord.substring(0, current.length - shouldDelete)
    );

    // Determine if this word is complete
    if (!isDeleting && text === currentWord) {
      // Make a pause at the end
      setTimeout(() => setIsDeleting(true), 500);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);

      // Move to the next word
      setWordIndex((current) => (current + 1) % words.length);
    }
  }

  useEffect(() => {
    const timer = setTimeout(type, isDeleting ? 100 : 200);

    // Cleanup function to clear the timeout
    return () => clearTimeout(timer);

    // Add dependencies to the dependency array
  }, [wordIndex, isDeleting, text]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const decodedToken = jwtDecode(token);
      setUsername(decodedToken.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className=" w-screen h-screen font-orbitron ">
      <video
        autoPlay
        loop
        muted
        className="absolute top-0 left-0 object-cover w-full h-full z-[-1]"
      >
        <source src="/space.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black opacity-60 z-[-1]"></div>

      <div className=" h-screen w-screen flex flex-col items-center justify-center">
        <div className=" flex items-center gap-6 fixed top-10 right-10">
          <div className=" flex gap-6">
            <Link>
              <i
                class="fa-regular fa-circle-user fa-2xl"
                style={{ color: "white" }}
              ></i>
            </Link>
            <div className=" text-white">Hello! {username}</div>
            <button
              className=" px-4 py-2 bg-white text-black font-bold rounded-xl hover:bg-slate-200 "
              style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
        </div>

        <div className=" ">
          <h1 className="text-4xl md:text-6xl lg:text-9xl text-white font-bold">
            Astronomy...
          </h1>
        </div>
        <div className=" h-16 ">
          <h2 className="text-3xl mt-4 text-white">{text}</h2>
        </div>

        <div className="flex flex-col gap-10 lg:flex-row items-center justify-center lg:gap-32 pt-16">
          <Link
            to={"/main/link01"}
            className="relative bg-white-500 text-white font-bold hover:bg-slate-400 hover:text-black px-8 py-4 rounded-lg overflow-hidden"
            style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
          >
            Picture Of The Day
          </Link>
          <Link
            to={"/main/link02"}
            className="relative bg-white-500 text-white font-bold hover:bg-slate-400 hover:text-black px-8 py-4 rounded-lg overflow-hidden"
            style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
          >
            Earth Daily Images
          </Link>
          <Link
            to={"/main/link03"}
            className="relative bg-white-500 text-white font-bold hover:bg-slate-400 hover:text-black px-8 py-4 rounded-lg overflow-hidden"
            style={{ boxShadow: "0 0 20px rgba(255, 255, 255, 0.8)" }}
          >
            Mars Rover Photos
          </Link>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
