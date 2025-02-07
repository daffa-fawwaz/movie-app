import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailMovie } from "../api";

const DetailMovie = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState(null);

  useEffect(() => {
    detailMovie(id).then((result) => {
      setMovieDetail(result);
    });
  }, [id]);

  if (!movieDetail) {
    return (
      <div className="text-white text-center text-xl mt-10">Loading...</div>
    );
  }

  return (
    <div className="relative min-h-screen bg-gray-900 text-white flex items-center justify-center p-5">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/original${movieDetail.poster_path})`,
        }}
      ></div>
      <div className="relative z-10 bg-gray-800 bg-opacity-80 p-8 rounded-lg shadow-xl max-w-4xl flex flex-col md:flex-row">
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetail.poster_path}`}
          alt={movieDetail.title}
          className="w-full md:w-1/3 rounded-lg shadow-lg"
        />
        <div className="md:ml-6 mt-4 md:mt-0 flex flex-col justify-center">
          <h1 className="text-3xl font-bold mb-2">{movieDetail.title}</h1>
          <p className="text-gray-400 mb-2">
            Release Date: {movieDetail.release_date}
          </p>
          <p className="text-yellow-400 font-semibold mb-2">
            ⭐ {movieDetail.vote_average} / 10
          </p>
          <p className="text-gray-300">{movieDetail.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default DetailMovie;
