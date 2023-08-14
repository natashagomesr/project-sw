import Image from "next/image";
import Link from "next/link";

function SideBar() {
  return (
    <div className="fixed flex w-1/5 h-screen items-center flex-col bg-black p-8 pt-20 text-center bg-[url('/assets/background-menu.png')]">
      <Image src="/assets/logo.png" width={150} height={0} alt="dashboard" />
      <div className="mt-16 hover:text-amber-200 cursor-pointer">
        <Link href="/">
          <div className=" mb-2">
            <Image
              src="/assets/dashboard.svg"
              width={80}
              height={80}
              alt="dashboard"
            />
          </div>
          Dashboard
        </Link>
      </div>
      <div className="mt-12 hover:text-amber-200 cursor-pointer">
        <Link href="/characters">
          <div className="mb-2">
            <Image
              src="/assets/character.svg"
              width={80}
              height={80}
              alt="character"
            />
          </div>
          Characters
        </Link>
      </div>
      <div className="mt-12 hover:text-amber-200 cursor-pointer">
        <Link href="/planets">
          <div className="mb-2">
            <Image
              src="/assets/planet.svg"
              width={80}
              height={80}
              alt="planet"
            />
          </div>
          Planets
        </Link>
      </div>
      <div className="mt-12 hover:text-amber-200 cursor-pointer">
        <Link href="/starships">
          <div className="mb-2">
            <Image
              src="/assets/spaceship.svg"
              width={80}
              height={80}
              alt="starship"
            />
          </div>
          Starships
        </Link>
      </div>
    </div>
  );
}

export default SideBar;
