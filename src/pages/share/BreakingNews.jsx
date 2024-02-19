import React from "react";
import Marquee from "react-fast-marquee";

const BreakingNews = () => {
  return (
    <div className="flex">
      <button className="btn btn-success">Latest News</button>
      <Marquee speed={100}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
      <Marquee className="text-red-500" speed={100}>
        I can be a React component, multiple React components, or just some
        text.
      </Marquee>
    </div>
  );
};

export default BreakingNews;
