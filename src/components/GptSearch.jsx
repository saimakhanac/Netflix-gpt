import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";

const GptSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img src={BG_URL} alt="bg" className="h-screen object-cover md:h-auto md:object-none" />
      </div>
      <div className="pt-[45%] md:pt-[0%]">
        {/* Gpt Search Bar */}
        <GptSearchBar />

        {/* Gpt Movie Suggestion */}
        <GptMovieSuggestions />
      </div>
    </>
  );
};
export default GptSearch;
