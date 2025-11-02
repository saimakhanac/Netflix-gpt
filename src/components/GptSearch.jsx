import { BG_URL } from "../utils/constants";
import GptMovieSuggestion from "./GptMovieSuggestion"
import GptSearchBar from "./GptSearchBar"

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img
          src={BG_URL}
          alt="bg"
        />
      </div>

      {/* Gpt Search Bar */}
      <GptSearchBar />

      {/* Gpt Movie Suggestion */}
      <GptMovieSuggestion />
    </div>
  );
}
export default GptSearch