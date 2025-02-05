import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailMovie } from "../api";

const DetailMovie = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);

  useEffect(() => {
    detailMovie(id).then((result) => {
      setMovieDetail(result);
    });
  }, [id]);
  return (
    <>
      <div className=""></div>
    </>
  );
};

export default DetailMovie;
