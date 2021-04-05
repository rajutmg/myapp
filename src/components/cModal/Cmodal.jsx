import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import axios from "axios";
import { Button } from "@material-ui/core";
import {
  img_500,
  unavailable,
  unavailableLandscape,
} from "../../config/config";
import YouTubeIcon from "@material-ui/icons/YouTube";
import "./cmodal.css";
import Carousel from "./carousel/Carousel";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    width: "90%",
    height: "80%",
    backgroundColor: "#39445a",
    border: "2px solid #000",
    borderRadius: "10",
    color: "white",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Cmodal({ children, media_type, id }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [content, setContent] = useState();
  const [video, setVideo] = useState();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const fetchData = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setContent(data);
  };

  const fetchVideo = async () => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/${media_type}/${id}/videos?api_key=${process.env.REACT_APP_API_KEY}&language=en-US`
    );
    setVideo(data.results[0]?.key);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
    fetchVideo();
  }, []);

  return (
    <div>
      <button type="button" className="media" onClick={handleOpen}>
        {children}
      </button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          {content && (
            <div className={classes.paper}>
              <div class="contentModal">
                <Grid container spacing={3}>
                  <Grid item xs={4}>
                    <img
                      className="Content_port"
                      alt={content.name || content.title}
                      src={
                        content.poster_path
                          ? `${img_500}/${content.poster_path}`
                          : unavailable
                      }
                      alt=""
                    />
                    <img
                      className="content_port"
                      alt={content.name || content.title}
                      src={
                        content.poster_path
                          ? `${img_500}/${content.backdrop_path}`
                          : unavailableLandscape
                      }
                      alt=""
                    />
                  </Grid>
                  <Grid item xs={8}>
                    <div className="contentModal_about">
                      <span className="contentModal_title">
                        {content.name || content.title} (
                        {(
                          content.first_air_date ||
                          content.release_date ||
                          "-----"
                        ).substring(0, 4)}
                        )
                        {content.tagline && (
                          <i className="tagline"> {content.tagline}</i>
                        )}
                        <span className="contentModal_description">
                          {content.overview}
                        </span>
                      </span>
                      <div></div>
                      <Carousel media_type={media_type} id={id} />
                      <Button
                        varient="contained"
                        startIcon={<YouTubeIcon />}
                        color="secondary"
                        target="_blank"
                        href={`https:/www.youtube.com/watch?v=${video}`}
                      >
                        Watch the Trailer
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
            </div>
          )}
        </Fade>
      </Modal>
    </div>
  );
}
