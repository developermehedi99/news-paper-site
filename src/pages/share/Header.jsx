import moment from "moment";
import React from "react";

const Header = () => {
  return (
    <div className="text-center mt-6">
      <h1 className="text-3xl font-bold">The Daily Star News</h1>
      <p className="text-xl my-2">Journalism Without Fear or Favour</p>
      <p className="text-2xl font-semibold">
        {moment().format("MMMM Do YYYY, h:mm:ss a")}
      </p>
    </div>
  );
};

export default Header;
