import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { img_300, noPicture } from "../../../config/config";
import axiox from "axios";
import "./carousel.css";

const handleDragStart = (e) => e.preventDefault();

const Carousel = ({ media_type, id }) => {
  const [credits, setCredits] = useState();

  const items = credits?.map((c) => (
    <div className="carouselItems">
      <img
        src={c.profile_path ? `${img_300}/${c.profile_path}` : noPicture}
        alt={c?.name}
        onDragStart={handleDragStart}
        className="carouselItem_img"
      />
      <b className="carouselItem_txt">{c?.name}</b>
    </div>
  ));

  const responsive = {
    0: {
      items: 5,
    },
    512: {
      item: 5,
    },
    1024: {
      item: 7,
    },
  };

  const fetchCredits = async () => {
    const { data } = await axiox.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/credits?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setCredits(data.cast);
  };

  useEffect(() => {
    fetchCredits();
  }, []);

  return (
    <AliceCarousel
      autoPlay
      responsive={responsive}
      infinite
      disableDotsControls
      disableButtonsControls
      mouseTracking
      items={items}
    />
  );
};

export default Carousel;
