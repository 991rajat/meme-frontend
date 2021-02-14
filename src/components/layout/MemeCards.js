import React from "react";
import MemeCard from "./MemeCard";
import { useSelector } from "react-redux";
const MemeCards = () => {
  const memes = useSelector((state) => state.memes.memes);
  console.log("----", memes);
  return (
    <main role="main" className="wrapper">
      {memes.length == 0 ? (
        <div className="container text-center">
          <img src="https://i.imgflip.com/4xxugp.jpg" alt="" />
        </div>
      ) : (
        <div className="row">
          {memes.map((meme) => (
            <MemeCard key={meme.id} data={meme} />
          ))}
        </div>
      )}
    </main>
  );
};

export default MemeCards;
