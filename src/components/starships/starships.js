"use client";
import { useState, useEffect } from "react";
import { API_URL } from "@/constants";
import Loader from "../../components/loader";
import Image from "next/image";
import SideBar from "../../components/sidebar";

function Starships() {
  const [isLoading, setIsLoading] = useState(true);
  const [starships, setStarships] = useState([]);
  const [nextPage, setNextPage] = useState("");
  const [prevPage, setPrevPage] = useState("");

  function getData(customURL) {
    const URL = customURL || `${API_URL}/starships/`;

    setIsLoading(true);

    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setStarships(data.results);

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

  const renderStarshipsCard = () => (
    <>
      <div className="flex">
        <div className=" flex items-center text-white w-7 border-[1px] rounded-full	border-yellow-300 h-7 text-center cursor-pointer bg-amber-200 mt-[420px] ">
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
        <div className="flex flex-wrap mb-20 justify-center">
          {starships.map((starship, id) => {
            return (
              <>
                <div
                  key={id}
                  className="flex flex-col border-2 rounded-xl shadow-xl p-1 mt-10 ml-4 mr-4 w-52 h-64 text-center items-center pt-5"
                >
                  <Image
                    src="/assets/black-spaceship.svg"
                    width={110}
                    height={0}
                    alt="card"
                  />
                  <div className="text-yellow-400 font-semibold mt-2">
                    {starship.name}
                  </div>
                  <div className="text-slate-500 font-light mb-5 mt-2 text-sm">
                    <div>Passengers:{starship.passengers}</div>
                    <div>Class:{starship.starship_class}</div>
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
        <div className="absolute ml-[430px] mr-14 mt-8 mb-8">
          <div className="flex flex-col items-center ">
            {isLoading ? <Loader /> : renderStarshipsCard()}
          </div>
        </div>
      </main>
    </>
  );
}

export default Starships;
