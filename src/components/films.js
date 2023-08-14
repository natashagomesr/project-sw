"use client";
import { useState, useEffect } from "react";
import { API_URL } from "@/constants";
import Loader from "./loader";

function Films() {
  const [isLoading, setIsLoading] = useState(true);
  const [films, setFilms] = useState([]);

  function getFilms() {
    fetch(`${API_URL}/films/`)
      .then((response) => response.json())
      .then((data) => {
        setFilms(data.results);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    getFilms();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="border-2 rounded-xl shadow-xl p-5">
      <div className="font-black">Latest movies</div>
      <div className="text-slate-500 font-light mb-4 mt-2">
        Discover the latest launches of the brand
      </div>
      <table className="w-[580px] h-[380px] text-sm">
        <thead>
          <tr
            key="first"
            className="font-light border-b-[1px] text-left border-b-stone-400 text-slate-500"
          >
            <th>Title</th>
            <th>Director</th>
            <th>Release date</th>
            <th>Episodes</th>
          </tr>
        </thead>
        <tbody className="">
          {films.map((film, id) => {
            return (
              <tr
                key={id}
                className="h-10 font-extralight text-sm border-b-[1px] border-b-stone-200 text-slate-500 "
              >
                <td>{film.title}</td>
                <td>{film.director}</td>
                <td>{film.release_date}</td>
                <td>{film.episode_id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Films;
