import React from "react";
import MemeCard from "./MemeCard";
import { useSelector } from "react-redux";
const MemeCards = () => {
  const memes = useSelector((state) => state.memes);
  //console.log(memes);
  return (
    <div className="row">
      {memes.map((meme) => (
        <MemeCard key={meme.id} data={meme} />
      ))}
    </div>
  );
};

export default MemeCards;
