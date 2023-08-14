"use client";
import { useState, useEffect } from "react";
import { API_URL } from "@/constants";
import Image from "next/image";
import Loader from "../loader";
import SideBar from "../sidebar";

function Planets() {
  const [isLoading, setIsLoading] = useState(true);
  const [planets, setPlanets] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  function getData(customURL) {
    const URL = customURL || `${API_URL}/planets/`;

    setIsLoading(true);

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPlanets(data.results);

        setNextPage(data.next);
        setPrevPage(data.previous);

        setIsLoading(false);
      })
      .catch((error) => {
        console.log("There was a problem!", error);
        setIsLoading(false);
      });
  }

  useEffect(() => {
    getData();
  }, []);

  const renderPlanetCard = () => (
    <>
      <div className="flex">
        <div className=" flex items-center text-white w-7 border-[1px] rounded-full	border-yellow-300 h-7 text-center cursor-pointer bg-amber-200 mt-[420px]">
          {null ? (
            prevPage
          ) : (
            <div
              className="w-[30px] text-center "
              onClick={() => getData(prevPage)}
            >
              ᐸ
            </div>
          )}
        </div>
        <div className="flex flex-wrap justify-center mb-20">
          {planets.map((planet, id) => {
            return (
              <>
                <div
                  key={id}
                  className="flex flex-col items-center border-2 rounded-xl shadow-xl p-1 mt-10 ml-7 mr-7 w-52 h-60"
                >
                  <Image
                    src="/assets/black-planet.svg"
                    width={110}
                    height={0}
                    alt="card"
                  />
                  <div className="text-yellow-400 font-semibold mt-2">
                    {planet.name}
                  </div>
                  <div className="text-slate-500 font-light mb-5 mt-2 text-sm">
                    <div>Diameter:{planet.diameter}</div>
                    <div>Climate:{planet.climate}</div>
                    <div>Population:{planet.population}</div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="flex items-center text-white w-7 border-[1px] rounded-full	border-yellow-300 h-7 text-center cursor-pointer bg-amber-200 mt-[420px] mr-5">
          {nextPage && (
            <div
              className="w-[30px] text-center"
              onClick={() => getData(nextPage)}
            >
              ᐳ
            </div>
          )}
        </div>
      </div>
    </>
  );

  return (
    <>
      <SideBar />
      <main className="flex">
        <div className="absolute ml-[430px] mr-14 mt-8">
          <div className="flex flex-row items-center">
            {isLoading ? <Loader /> : renderPlanetCard()}
          </div>
        </div>
      </main>
    </>
  );
}

export default Planets;
