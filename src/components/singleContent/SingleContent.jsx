import React from 'react'
import {img_300, unavailable} from '../../config/config';
import '../../components/singleContent/singlecontent.css';
import Badge from '@material-ui/core/Badge';

const SingleContent = ( {id,
    poster,
    title,
    date,
    media_type,
    rating}) => {
    return (
        <div className="media">
        <Badge badgeContent={rating} color={rating>7?'primary':'secondary'}>
      </Badge>
            <img className="poster" src={poster? `${img_300}/${poster}` : unavailable} alt={title}/>
        <b className="title"> {title}</b>
        <span className="subTitle">{media_type === "tv" ? "TV Series" : "Movies"} </span>
        <span className="subTitle">{date}</span>
        </div>
    )
}

export default SingleContent
