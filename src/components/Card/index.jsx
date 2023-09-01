import React from "react";
import { useRouter } from "next/router";

const Card = (props) => {
  const { id, title, overview, release_date, image, vote_average, vote_count } = props;
  const img = "https://image.tmdb.org/t/p/w400";
  const router = useRouter();
  return (
    <div key={id} className="max-w-md rounded m-6">
      <div className="w-[220px] mx-auto md:w-[400px]">
        <img src={`${img}/${image}`} alt={title} className="object-contain rounded-t-md mx-auto" />
      </div>
      <div className="p-6 bg-slate-500 mx-6 mb-6 rounded-b-md">
        <h2 className=" text-2xl font-bold stroke-black drop-shadow-md mb-4 text-center text-blue-200">{title}</h2>
        <p className="text-white text-base text-justify">{overview}</p>
        <p className="text-md text-slate-200 my-4">Release Date : {release_date}</p>
        <div className="flex justify-between items-center">
          <div>
            <p className={`${vote_average < 8 ? "text-yellow-500 font-bold text-lg tracking-tight" : "text-green-500 font-bold text-lg tracking-tight"}`}>
              {vote_average}/10 - ({vote_count})
            </p>
          </div>
          <div>
            <button className="px-6 ml-4 py-2 bg-sky-500 rounded-md hover:bg-sky-800 text-white" onClick={() => router.push(`/details/${id}`)}>
              See Detail
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
