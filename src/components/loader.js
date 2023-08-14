import Image from "next/image";

function Loader() {
  return (
    <div className="flex items-center flex-col m-auto">
      <div className="w-12 h-12 animate-ping">
        <Image src="/assets/loader.svg" width={40} height={0} alt="dashboard" />
      </div>
    </div>
  );
}

export default Loader;
