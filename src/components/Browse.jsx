import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../hooks/usePopularMovie";
import useTopRatedMovies from "../hooks/useTopRatedMovies";
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovie();
  useTopRatedMovies();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SecondaryContainer/>
      {/* 
        MainContainer
       - Videobackground
       -Video Title
      Seconadary Container
        - MovieList * n
          - Cards * n
       */}
    </div>
  );
};
export default Browse;
