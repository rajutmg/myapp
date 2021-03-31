import axios from "axios";
import React, { useEffect } from "react";
import Chip from "@material-ui/core/Chip";

const Genres = ({
  type,
  selectedGenres,
  genres,
  setSelectedGenres,
  setGenres,
  setPage,
  genreforURL,
}) => {
  const handelAdd = (genre) => {
    setSelectedGenres([...selectedGenres, genre]);
    setGenres(genres.filter((g) => g.id !== genre.id));
    setPage(1);
  };
  const handelRemove = (genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    );
    setGenres([...genres, genre]);
    setPage(1);
  };
  const fetchGenres = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/genre/${type}/list?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&with_genres=${genreforURL}`
    );
    setGenres(data.genres);
  };
  // console.log(genres);
  useEffect(() => {
    fetchGenres();

    return () => {
      setGenres({}); // unmounting
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div style={{ padding: "6px 0" }}>
      {selectedGenres &&
        selectedGenres.map((genre) => (
          <Chip
            key={genre.id}
            style={{ margin: 2 }}
            color="primary"
            label={genre.name}
            clickable
            size="small"
            onDelete={() => handelRemove(genre)}
          />
        ))}
      {genres &&
        genres.map((genre) => (
          <Chip
            key={genre.id}
            style={{ margin: 2 }}
            label={genre.name}
            clickable
            size="small"
            onClick={() => handelAdd(genre)}
          />
        ))}
    </div>
  );
};

export default Genres;
