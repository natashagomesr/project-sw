import Image from "next/image";
import { API_URL } from "@/constants";
import { useState, useEffect } from "react";
import Loader from "./loader";

function Counter() {
  const [isLoading, setIsLoading] = useState(true);
  const [countPlanets, setCountPlanets] = useState([]);
  const [countPeoples, setCountPeoples] = useState([]);
  const [countStarShips, setCountStarShips] = useState([]);
  const [countFilms, setCountFilms] = useState([]);

  function getCountPlanets() {
    fetch(`${API_URL}/planets/`)
      .then((response) => response.json())
      .then((data) => {
        setCountPlanets(data);
        setIsLoading(false);
      });
  }

  function getCountPeoples() {
    fetch(`${API_URL}/people/`)
      .then((response) => response.json())
      .then((data) => {
        setCountPeoples(data);
        setIsLoading(false);
      });
  }

  function getCountStarShips() {
    fetch(`${API_URL}/starships/`)
      .then((response) => response.json())
      .then((data) => {
        setCountStarShips(data);
        setIsLoading(false);
      });
  }

  function getCountFilms() {
    fetch(`${API_URL}/films/`)
      .then((response) => response.json())
      .then((data) => {
        setCountFilms(data);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    setIsLoading(true);
    getCountPlanets();
    getCountPeoples();
    getCountStarShips();
    getCountFilms();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="flex flex-row h-40 max-w-full border-2 rounded-xl shadow-xl mt-10 items-center">
      <div className="text-5xl text-yellow-300 font-bold ml-10">
        {countPeoples.count}
      </div>
      <div className="flex flex-col items-center ml-4 border-r-stone-800 border-r-[1px] pr-10">
        <Image
          src="/assets/black-character.svg"
          width={80}
          height={80}
          alt="character"
        />
        <div className="mt-2 font-bold">Characteres</div>
      </div>

      <div className="text-5xl text-yellow-300 font-bold ml-10">
        {countPlanets.count}
      </div>
      <div className="flex flex-col items-center ml-4 border-r-stone-800 border-r-[1px] pr-10">
        <Image
          src="/assets/black-planet.svg"
          width={80}
          height={80}
          alt="planet"
        />
        <div className="mt-2 font-bold">Planets</div>
      </div>

      <div className="text-5xl text-yellow-300 font-bold ml-10">
        {countStarShips.count}
      </div>
      <div className="flex flex-col items-center ml-4 border-r-stone-800 border-r-[1px] pr-10">
        <Image
          src="/assets/black-spaceship.svg"
          width={80}
          height={80}
          alt="starship"
        />
        <div className="mt-2 font-bold">Starships</div>
      </div>

      <div className="text-5xl text-yellow-300 font-bold ml-10">
        {countFilms.count}
      </div>
      <div className="flex flex-col items-center ml-4 mr-10">
        <Image src="/assets/movie.svg" width={80} height={80} alt="movie" />
        <div className="mt-2 font-bold">Movies</div>
      </div>
    </div>
  );
}

export default Counter;
