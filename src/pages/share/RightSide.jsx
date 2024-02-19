import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

const RightSide = () => {
  return (
    <div>
      <div className="p-4">
        <h1 className="text-2xl font-bold">Login With</h1>
        <button className="border flex w-full border p-2 rounded-md border-pink-700 items-cente gap-2 mt-4 mb-3">
          <FaGoogle></FaGoogle> Login with Google
        </button>{" "}
        <button className="border gap-2 w-full border p-2 rounded-md border-blue-400 flex items-center">
          <FaGithub></FaGithub> Login with Github
        </button>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-3">Find On us</h1>
        <Link className="flex items-center gap-3 border p-2">
          <FaFacebook></FaFacebook> Facebook
        </Link>
        <Link className="flex items-center gap-3  border p-2 py-4">
          <FaTwitter></FaTwitter> Twitter
        </Link>
        <Link className="flex items-center gap-3 border p-2">
          <FaInstagram></FaInstagram> Instagram
        </Link>
      </div>
      <div className="p-4">
        <h1 className="text-2xl font-bold mb-3">Q-Zone</h1>
        <div className="text-center">
          <img
            src="https://www.bssnews.net/assets/news_photos/2022/06/12/image-66144-1655036071.jpg"
            alt=""
          />
          <p className="text-xl font-bold">Playing cricket...</p>
        </div>
        <div className="text-center my-5">
          <img
            src="https://cdn.britannica.com/51/190751-050-147B93F7/soccer-ball-goal.jpg"
            alt=""
          />
          <p className="text-xl font-bold">Playing Football...</p>
        </div>
        <div className="text-center">
          <img
            src="https://static.toiimg.com/thumb/msid-70661134,width-1070,height-580,imgsize-761205,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg"
            alt=""
          />
          <p className="text-xl font-bold">Playing BasketBall...</p>
        </div>
      </div>
    </div>
  );
};

export default RightSide;
