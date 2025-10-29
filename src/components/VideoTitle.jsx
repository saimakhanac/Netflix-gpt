const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/2">{overview}</p>
      <div className="">
        <button className="bg-white hover:bg-white/70 transition rounded-lg text-black px-9 py-3 text-xl">
          ▶ Play
        </button>
        <button className="bg-gray-500/50 hover:bg-gray-500/70 transition rounded-lg text-white mx-2 px-9 py-3 text-xl"> More Info</button>
      </div>
    </div>
  );
};
export default VideoTitle;
