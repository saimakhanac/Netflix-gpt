const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video md:mt-0 mt-[30] md:pt-[20%] px-3 md:px-24 flex flex-col justify-center absolute text-white md:bg-gradient-to-r from-black md:block my-2">
      <div>
        <h1 className="text-lg md:text-5xl font-bold">{title}</h1>
        <p className=" py-3 md:py-6 md:inline-block hidden md:text-md lg:text-lg w-[100%] lg:w-1/2 md:w-3/4">
          {overview}
        </p>
      </div>

      <div className="my-4 md:m-0">
        <button className="bg-white hover:bg-white/70 transition rounded-lg text-black px-6 md:px-9 py-2 md:py-3 md:text-xl">
          ▶ Play
        </button>
        <button className="bg-gray-500/50 hover:bg-gray-500/70 transition rounded-lg text-white mx-2 px-6 md:px-9 py-2 md:py-3 md:text- md:inline-block hidden">
          {" "}
          More Info
        </button>
      </div>
    </div>
  );
};
export default VideoTitle;
