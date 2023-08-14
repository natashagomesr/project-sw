"use client";
import { useState, useEffect } from "react";
import { API_URL } from "@/constants";
import Image from "next/image";
import Loader from "../loader";
import SpeciesCard from "./species-card";
import SideBar from "../sidebar";

function Characters() {
  const [isLoading, setIsLoading] = useState(true);
  const [people, setPeople] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  function getData(customURL) {
    const URL = customURL || `${API_URL}/people/`;

    setIsLoading(true);

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setPeople(data.results);

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

  const renderPeopleCard = () => (
    <>
      <div className="flex">
        <div className=" flex items-center text-white w-7 border-[1px] rounded-full	border-yellow-300 h-7 text-center cursor-pointer bg-amber-200 mt-[350px] mr-5">
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
        <div className="flex flex-wrap">
          {people.map((character, id) => (
            <>
              <div
                key={id}
                className="flex flex-col items-center border-2 rounded-xl shadow-xl p-1 mt-8 ml-8 "
              >
                <Image
                  src="/assets/card-generic.png"
                  width={170}
                  height={170}
                  alt="card"
                />

                <div className="text-yellow-400 font-semibold mt-2">
                  {character.name}
                </div>
                <div className="text-slate-500 font-light mb-5 mt-2">
                  <div>Birth year:{character.birth_year}</div>
                  <div>Mass:{character.mass}</div>
                  <div>Height:{character.height}</div>
                </div>
                {/* <SpeciesCard character={character} /> */}
              </div>
            </>
          ))}
        </div>
        <div className="flex items-center text-white w-7 border-[1px] rounded-full	border-yellow-300 h-7 text-center cursor-pointer bg-amber-200 mt-[350px]">
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
          <div className="flex flex-col items-center">
            {isLoading ? <Loader /> : renderPeopleCard()}
          </div>
        </div>
      </main>
    </>
  );
}

export default Characters;
