import { useEffect, useState } from "react";
import { getMovie, searchMovie } from "../api";
import { Link } from "react-router-dom";
import Navbar from "../Components/Fragments/Navbar";
import CarouselWithCaptionsExample from "../Components/Fragments/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const movieLink = import.meta.env.VITE_BASEIMGURL;

  useEffect(() => {
    getMovie().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const search = async (e) => {
    if (e.length) {
      const query = await searchMovie(e);
      setPopularMovies(query);
    }
  };

  if (!localStorage.getItem("login")) {
    window.location.href = "/login";
  }

  return (
    <>
      <Navbar onChange={(e) => search(e.target.value)}></Navbar>
      <div className="h-36 bg-gray-900"></div>
      <section className="w-full bg-gray-900 pb-4">
        <CarouselWithCaptionsExample />
        <div className="w-full min-h-screen text-white p-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-6">
            {popularMovies.map((item, i) => (
              <Link to={`/detail/${item.id}`} key={i}>
                <div className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out flex flex-col items-center h-full">
                  <img
                    src={`${movieLink}/${item.poster_path}`}
                    alt={item.title}
                    className="w-full h-60 object-cover rounded-lg shadow-md"
                  />
                  <div className="flex flex-col items-center flex-grow w-full">
                    <h1 className="mt-2 text-lg font-semibold text-center">
                      {item.title}
                    </h1>
                    <p className="text-gray-400 text-sm text-center">
                      {item.release_date}
                    </p>
                    <p className="text-yellow-400 font-bold text-center">
                      ⭐ {item.vote_average}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
