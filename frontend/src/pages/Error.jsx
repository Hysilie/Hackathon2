import React from "react";
import { NavLink } from "react-router-dom";
import backgroundForest from "../assets/forest-background.jpg";

function Error() {
  return (
    <section
      className="flex items-center h-full p-16  "
      style={{
        backgroundImage: `url('${backgroundForest}')`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
      }}
    >
      <div className="container flex flex-col items-center justify-center  w-3/5 px-5 mx-auto my-8 bg-white rounded-xl">
        <div className="max-w-md text-center">
          <h2 className="mb-8 font-extrabold text-9xl ">
            <span className="sr-only">Error</span>404
          </h2>
          <p className="text-2xl font-semibold md:text-3xl">
            Sorry, we couldn't find this page.
          </p>
          <p className="mt-4 mb-8 font-semibold ">
            But dont worry, you can find plenty of other things on our homepage.
          </p>
          <NavLink to="/">
            <button
              type="button"
              className="px-8 py-3 m-3 font-semibold rounded bg-main-yellow text-white hover:bg-second-yellow"
            >
              Back to homepage
            </button>
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Error;
