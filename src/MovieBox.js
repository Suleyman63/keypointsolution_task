import { Modal, Button } from "react-bootstrap";
import React, { useState } from "react";

const API_IMG = "https://image.tmdb.org/t/p/w500/";

const MovieBox = ({
  titel,
  poster_path,
  vote_average,
  release_date,
  overview,
}) => {
  const [show, setShow] = useState(false);

  const handleShow = () => setShow(true);
  const handleClose = () => setShow(false);

  return (
    <div className="card text-center bg-dark mb-3">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path} alt="" />
        <div className="card-body">
          <button
            type="button"
            className="btn btn-outline-danger"
            onClick={handleShow}
          >
            View More
          </button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title className="text-danger fs-5 fw-bold">
                MOVIE DETAILS
              </Modal.Title>
            </Modal.Header>
            <Modal.Body className="text-center">
              <img
                className="card-img-top"
                style={{ width: "12rem" }}
                src={API_IMG + poster_path}
                alt=""
              />
              <h4>{titel}</h4>
              <h5 className="text-danger">IMDB: {vote_average}</h5>
              <h5 className="text-danger">Date: {release_date}</h5>
              <br></br>
              <h6 className="text-danger">Overview</h6>
              <p>{overview}</p>
            </Modal.Body>
            <Modal.Footer>
              <Button className="btn btn-danger" onClick={handleClose}>
                Close
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
