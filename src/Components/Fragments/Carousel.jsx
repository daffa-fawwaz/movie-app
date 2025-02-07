import { useState, useEffect } from "react";
import { getMovie } from "../../api";
import React from "react";
import {
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CImage,
} from "@coreui/react";
import { Link } from "react-router-dom";
const CarouselWithCaptionsExample = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const movieLink = import.meta.env.VITE_BASEIMGURL;

  useEffect(() => {
    getMovie().then((result) => {
      setPopularMovies(result);
    });
  }, []);

  const items = popularMovies.slice(4, 7).map((item) => (
    <CCarouselItem>
      <CImage
        className="w-full h-[500px] mx-auto object-center rounded-lg"
        src={`${movieLink}/${item.poster_path}`}
        alt="slide 1"
      />
      <CCarouselCaption className="d-none d-md-block z-10">
        <h5 className="text-2xl">{item.title}</h5>
        <p className="line-clamp-3 text-sm">{item.overview}</p>
      </CCarouselCaption>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
    </CCarouselItem>
  ));

  return (
    <CCarousel className="w-[65%] mx-auto relative" controls indicators>
      {items}
    </CCarousel>
  );
};

export default CarouselWithCaptionsExample;
