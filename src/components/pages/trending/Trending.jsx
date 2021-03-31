import React, { useState, useEffect } from "react";
import axios from "axios";
import SingleContent from "../../singleContent/SingleContent";
import './trending.css';
import CustomPagination from '../../pagination/CustomPagination';

const Trending = () => {
    const [page, setPage] = useState(1);
  const [content, setcontent] = useState([]);
  const fetchTrending = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/trending/all/day?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`
    );
    setcontent(data.results);
    console.log(data.results);
  };

  useEffect(() => {
    fetchTrending();
  }, [page]);

  return (
    <>
      <span className="pageTitle">Trending</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={c.media_type}
              rating={c.vote_average}
            />
          ))}
      </div>
      <CustomPagination setPage={setPage}/>
    </>
  );
};

export default Trending;
