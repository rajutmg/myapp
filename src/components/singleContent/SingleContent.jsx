import React from "react";
import { img_300, unavailable } from "../../config/config";
import "../../components/singleContent/singlecontent.css";
import Badge from "@material-ui/core/Badge";
import Cmodal from "../cModal/Cmodal";

const SingleContent = ({ id, poster, title, date, media_type, rating }) => {
  return (
    <Cmodal media_type={media_type} id={id}>
      <Badge
        badgeContent={rating}
        color={rating > 7 ? "primary" : "secondary"}
      ></Badge>
      <img
        className="poster"
        src={poster ? `${img_300}/${poster}` : unavailable}
        alt={title}
      />
      <b className="title"> {title}</b>
      <span className="subTitle">
        {media_type === "tv" ? "TV Series" : "Movies"}{" "}
      </span>
      <span className="subTitle">{date}</span>
    </Cmodal>
  );
};

export default SingleContent;
