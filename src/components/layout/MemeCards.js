import React from "react";
import MemeCard from "./MemeCard";
import { useSelector } from "react-redux";

// Stream of Memes
const MemeCards = () => {
  const memes = useSelector((state) => state.memes.memes);
  //console.log("----", memes);
  return (
    <main role="main" className="wrapper">
      {memes.length == 0 ? (
        <div className="container text-center">
          <img
            src="https://wpamelia.com/wp-content/uploads/2018/11/ezgif-2-6d0b072c3d3f.gif"
            alt=""
          />
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
