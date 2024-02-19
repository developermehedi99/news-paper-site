import React from "react";
import { useParams } from "react-router-dom";

const NewsDetails = () => {
  const { id, title } = useParams();
  return (
    <div>
      <h1>news details...</h1>
      <p>{id}</p>
      <h2>name:{id.title}</h2>
    </div>
  );
};

export default NewsDetails;
