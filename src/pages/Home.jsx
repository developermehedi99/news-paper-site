import { useLoaderData } from "react-router-dom";
import BreakingNews from "./share/BreakingNews";
import Header from "./share/Header";
import LeftSide from "./share/LeftSide";
import Middle from "./share/Middle";
import Navbar from "./share/Navbar";
import RightSide from "./share/RightSide";

const Home = () => {
  const news = useLoaderData();

  return (
    <div>
      <Header></Header>
      <BreakingNews></BreakingNews>
      <Navbar></Navbar>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="border">
          <LeftSide></LeftSide>
        </div>
        <div className="md:col-span-2">
          {news.map((anew) => (
            <Middle key={anew._id} news={anew}></Middle>
          ))}
        </div>
        <div className="border">
          <RightSide></RightSide>
        </div>
      </div>
    </div>
  );
};

export default Home;
