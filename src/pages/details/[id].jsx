import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CardDetail from "@/components/CardDetail";
import { useSelector } from "react-redux";


const MovieDetail = ({ post }) => {
  useEffect(() => {
    console.log(post);
  }, []);
  // useEffect(() => {
  //   console.log("value", values);
  // }, [values]);

  return (
    <div className="flex flex-wrap justify-center p-16 bg-slate-900">
      <CardDetail id={post.id} title={post.title} overview={post.overview} release_date={post.release_date} image={post.poster_path} vote_average={post.vote_average} vote_count={post.vote_count} budget={post.budget} genres={post.genres} />
    </div>
  );
};

export async function getStaticPaths() {
  // const values = useSelector(state => state.movie.values);
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDBkNjc2ODkyMzk5OTFkZWFiNDJmZGYxOWQ1NmEzNyIsInN1YiI6IjY0YjJhODQ0Nzg1NzBlMDBjNmQ0NGY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hgfJY9gL2IqUMDdhY__LMR8w9ZudLuxXNhvp9r_sCpc",
    },
  };

  // Fetch data from external API
  const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming`, options);
  const posts = await response.json();
  const data = posts.results;

  const paths = data.map((post) => ({
    params: { id: post.id.toString() },
  }));

  // Pass data to the page via props
  return { paths: paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDBkNjc2ODkyMzk5OTFkZWFiNDJmZGYxOWQ1NmEzNyIsInN1YiI6IjY0YjJhODQ0Nzg1NzBlMDBjNmQ0NGY3OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.hgfJY9gL2IqUMDdhY__LMR8w9ZudLuxXNhvp9r_sCpc",
    },
  };
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(`https://api.themoviedb.org/3/movie/${params.id}`, options);
  const post = await res.json();

  // Pass post data to the page via props
  return { props: { post } };
}

export default MovieDetail;
