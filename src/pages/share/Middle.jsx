import React from "react";
import { Link } from "react-router-dom";

const Middle = ({ news }) => {
  const { title, image_url, details, _id } = news;
  return (
    <div className="mb-8">
      <h1 className="text-xl">{title}</h1>
      <img src={image_url} alt="" />
      {details.length > 200 ? (
        <p>
          {details.slice(0, 200)}{" "}
          <Link to={`/news/${_id}`} className="font-bold text-green-600">
            read more..
          </Link>
        </p>
      ) : (
        <p>{details}</p>
      )}
    </div>
  );
};

export default Middle;
