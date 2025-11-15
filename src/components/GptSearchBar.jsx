import { useDispatch, useSelector } from "react-redux";
import lang from "../utils/languageConstants";
import { useRef } from "react";
import genAI from "../utils/gemini";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";
// import client from "../utils/openai";

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  // search movie  TMDB API
  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    return json.results;
  };

  const handleGptSearchclick = async () => {
    console.log(searchText.current.value);
    // Make an API call to GPT API and get Movie Reesult
    const gptQuery =
      "Act as a Movie Recommendation system and suggest some movies for the query" +
      searchText.current.value +
      ". only give me names of 5 movies, comma separated movies like the example result given ahead. Example Result: Gadar,Sholay, Don, Golmaal, Koi Mil Gaya";

    // const gptResults = await client.chat.completions.create({
    //   model: "gpt-3.5-turbo",
    //   messages: [{ role: "user", content: gptQuery }],
    // });
    // console.log(gptResults.choices[0].message.content, "gpt");
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    const prompt = gptQuery; // same query you already have

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    // const text = response;
    if (!text) {
      <>
        <h1>Error! Movie not Found</h1>
      </>;
    }
    console.log(text, "gemini");
    // array of movies
    const gptMovies = text.split(",");
    console.log(gptMovies);

    const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
    // data will return array of promise - [Promise,Promise,Promise,Promise,Promise]

    const tmdbResults = await Promise.all(promiseArray);
    console.log(tmdbResults);

    dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
  };

  return (
    <div className="pt-[10%] flex justify-center">
      <form
        className="mx-[2%] md:mx-[0%]  w-[90%] md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}>
        <input
          ref={searchText}
          type="text"
          className=" p-2 md:p-4 mx-2 my-3 md:m-4 bg-white rounded-lg col-span-9 md:text-lg text-sm"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className=" py-1 md:py-2 px-2 md:px-4 mx-2 my-3 md:m-4 bg-red-700 text-white rounded-lg col-span-3 md:text-lg text-sm"
          onClick={handleGptSearchclick}>
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};
export default GptSearchBar;
