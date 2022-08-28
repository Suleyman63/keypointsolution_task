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
            <Modal.Header closeButton className="bg-danger">
              <Modal.Title className="modal-title text-light fs-5 fw-bold ">
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
              <h6 className="text-danger fw-bold">IMDB: {vote_average}</h6>
              <h6 className="text-danger fw-bold">DATE: {release_date}</h6>
              <h6 className="text-danger mt-4 fw-bold">OVERVIEW</h6>
              <p className="movibox-text">{overview}</p>
            </Modal.Body>
            <Modal.Footer className="bg-secondary">
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
