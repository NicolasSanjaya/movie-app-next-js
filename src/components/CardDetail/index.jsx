import React, { useEffect, useState } from "react";

const CardDetail = (props) => {
  const { id, title, overview, release_date, image, vote_average, vote_count, budget, genres } = props;
  const img = "https://image.tmdb.org/t/p/w400";
  const [genre, setGenre] = useState([""]);
  const [genre2, setGenre2] = useState('')
  useEffect(() => {
    genres[0] && setGenre(genres[0].name);
    genres[1] && setGenre2(genres[1].name)
  }, []);
  return (
    <div className="w-full">
      <div key={id}>
        <div className="grid lg:grid-cols-2 content-center gap-6">
          <div className="">
            <img src={`${img}/${image}`} alt={title} />
          </div>
          <div className="">
            <h1 className="text-6xl font-bold text-slate-300">{title}</h1>
            <h3 className="text-white mt-12 text-xl tracking-wider font-semibold">Genre : {genre}, {genre2}</h3>
            <p className="text-base text-white my-8">Overview : {overview}</p>
            <p className="text-white text-xl">Release Date : {release_date}</p>
            <p className="text-white my-6 text-lg">
              Score : {Math.round(vote_average)}/10 - {vote_count}
            </p>
            <p className="text-white text-md tracking-wider">Budget : {budget.toLocaleString("en-US", { style: "currency", currency: "USD" })}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
