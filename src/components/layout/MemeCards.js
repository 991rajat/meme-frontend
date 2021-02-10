import React from "react";
import MemeCard from "./MemeCard";
import { useSelector } from "react-redux";
const MemeCards = () => {
  const memes = useSelector((state) => state.memes);
  console.log(memes);
  return (
    <div className="card-group">
      <MemeCard />
    </div>
  );
};

export default MemeCards;
