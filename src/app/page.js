"use client";
import FilmsChart from "../components/chart";
import Counter from "../components/counter";
import Films from "../components/films";
import NavBar from "../components/sidebar";

function Home() {
  return (
    <>
      <NavBar />
      <main className="flex">
        <div className="absolute flex flex-col items-center max-h-60 ml-[450px] mt-8">
          <div className="">
            <Counter />
          </div>
          <div className=" flex flex-row items-center mt-20">
            <Films />
            <FilmsChart />
          </div>
        </div>
      </main>
    </>
  );
}

export default Home;
