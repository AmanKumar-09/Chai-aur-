import React from "react";

const Body = () => {
  return (
    <>
    
      <div className=" flex items-center justify-center my-40    ">
        <div>
          <div className="text-5xl mb-4 font-semibold text-white">
            <p>Empower Live Through </p>
            <p>
              Innovative{" "}
              <span className="  underline custom-underline">AI</span>{" "}
              Technologies.{" "}
            </p>
          </div>
          <p className="mb-4  text-lg text-gray-200">
            Finding new horizons for visionaris to accelerate their innovation
            and progress.
          </p>
          <div className="mb-14">
            <button className=" bg-purple-800 hover:bg-purple-900 text-semibold text-white px-6 py-2 rounded-md mr-2">
              Explore Our Services
            </button>
            <button className=" border-2 text-white cursor-pointer border-purple-700 hover:text-purple-400 text-semibold rounded-md px-6 py-2">
              Learn More
            </button>
          </div>
          <span className="bg-gradient-to-r from-gray-500 cursor-pointer via-white to-gray-500 bg-clip-text text-transparent text-lg">From Ideas to Software Solutions . From Ideas to Software solutions . From Ideas to</span>
        </div>
      </div>
      
    </>
  );
};

export default Body;
