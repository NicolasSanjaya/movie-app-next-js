import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../Card";
import { useSelector, useDispatch } from "react-redux";
import { upcoming, popular, newest, trending } from "@/reducer";

const MovieList = () => {
  const [datas, setDatas] = useState([]);
  const [popularMovie, setPopularMovie] = useState([]);
  const [newestMovie, setNewestMovie] = useState([]);
  const [trendingMovie, setTrendingMovie] = useState([]);
  // const [search, setSearch] = useState("");
  const search = useSelector((state) => state.movie.value);
  const dispatch = useDispatch();

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDBkNjc2ODkyMzk5OTFkZWFiNDJmZGYxOWQ1NmEzNyIsInN1YiI6IjY0YjJhODQ0Nzg1NzBlMDBjNmQ0NGY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hgfJY9gL2IqUMDdhY__LMR8w9ZudLuxXNhvp9r_sCpc",
    },
  };
  const movieList = () => {
    const response = axios.get(`https://api.themoviedb.org/3/movie/upcoming`, options).then((datas) => {
      setDatas(datas.data.results);
    });
  };

  const getMovieListPopular = async () => {
    const movie = await axios.get("https://api.themoviedb.org/3/movie/top_rated?page=1", options);
    setPopularMovie(movie.data.results);
  };

  const getMovieListNewest = async () => {
    const movie = await axios.get("https://api.themoviedb.org/3/movie/now_playing?page=1", options);
    setNewestMovie(movie.data.results.reverse());
  };

  const getMovieListTrending = async () => {
    const movie = await axios.get("https://api.themoviedb.org/3/movie/popular?page=1", options);
    setTrendingMovie(movie.data.results);
  };

  useEffect(() => {
    movieList();
  }, []);

  useEffect(() => {
    getMovieListPopular();
    getMovieListNewest();
    getMovieListTrending();
  }, [search]);

  const rendering = () => {
    if (search === "") {
      return (
        datas.length > 0 &&
        datas.map((data) => (
          <div key={data.id}>
            <Card id={data.id} title={data.title} image={data.poster_path} overview={data.overview} release_date={data.release_date} vote_average={data.vote_average} vote_count={data.vote_count} />
          </div>
        ))
      );
    } else if (search === "popular") {
      return popularMovie.map((data) => (
        <div key={data.id}>
          <Card id={data.id} title={data.title} image={data.poster_path} overview={data.overview} release_date={data.release_date} vote_average={data.vote_average} vote_count={data.vote_count} />
        </div>
      ));
    } else if (search === "newest") {
      return newestMovie.map((data) => (
        <div key={data.id}>
          <Card id={data.id} title={data.title} image={data.poster_path} overview={data.overview} release_date={data.release_date} vote_average={data.vote_average} vote_count={data.vote_count} />
        </div>
      ));
    } else if (search === "trending") {
      return trendingMovie.map((data) => (
        <div key={data.id}>
          <Card id={data.id} title={data.title} image={data.poster_path} overview={data.overview} release_date={data.release_date} vote_average={data.vote_average} vote_count={data.vote_count} />
        </div>
      ));
    }
    return (
      datas.length < 1 &&
      datas.map((data) => (
        <div key={data.id} className="w-1/3 h-[600px] rounded m-6 animate-pulse">
          <div className="p-6 h-full bg-slate-300 my-6 rounded-b-md w-full mx-auto"></div>
        </div>
      ))
    );
  };

  return (
    <div>
      <div className="bg-slate-900 px-8 py-28">
        <h1 className="text-white text-center text-6xl font-semibold">Movie List</h1>
        <div className="text-white flex justify-center flex-wrap pt-16">
          <button className="px-6 py-2 bg-slate-500 rounded-lg hover:bg-slate-700 focus:bg-red-500 m-6" onClick={() => dispatch(upcoming())}>
            Upcoming
          </button>
          <button className="px-6 py-2 bg-slate-500 rounded-lg hover:bg-slate-700 focus:bg-red-500 m-6" onClick={() => dispatch(popular())}>
            Popular
          </button>
          <button className="px-6 py-2 bg-slate-500 rounded-lg hover:bg-slate-700 focus:bg-red-500 m-6" onClick={() => dispatch(newest())}>
            Newest
          </button>
          <button className="px-6 py-2 bg-slate-500 rounded-lg hover:bg-slate-700 focus:bg-red-500 m-6" onClick={() => dispatch(trending())}>
            Trending
          </button>
        </div>
        <div className="flex flex-wrap justify-center">{rendering()}</div>
      </div>
    </div>
  );
};

export default MovieList;
