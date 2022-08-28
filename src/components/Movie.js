import React, { useState, useEffect, useRef } from "react";
import "../style/App.css";
import MovieBox from "./MovieBox";
import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Container, Form, FormControl, Button } from "react-bootstrap";

const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`;

function Movie() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  const searchMovie = async (e) => {
    e.preventDefault();
    console.log("Searching");
    try {
      const url = `https://api.themoviedb.org/3/search/movie?api_key=bcc4ff10c2939665232d75d8bf0ec093&query=${query}`;
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setMovies(data.results);
    } catch (e) {
      console.log(e);
    }
  };

  const changeHandler = (e) => {
    setQuery(e.target.value);
  };

  // input focus
  const focusDiv = useRef();
  useEffect(() => {
    if (focusDiv.current) focusDiv.current.focus();
  }, [focusDiv]);

  // localstrorage clear
  const handleClick = () => {
    localStorage.clear();
    window.location.reload();
  };
  return (
    <>
      <Navbar bg="danger" expand="lg" variant="dark">
        <Container fluid>
          <Navbar.Brand href="/movie" className="fw-bold fs-3 mx-5">
            MOVIE APP
          </Navbar.Brand>
          <Button
            onClick={handleClick}
            variant="secondary"
            className="logout-btn mx-4"
          >
            Logout
          </Button>
        </Container>
      </Navbar>
      {/* ======== searchbar ============ */}
      <div className="container">
        <Form
          className="srch-form d-flex justify-content-center mt-4"
          onSubmit={searchMovie}
          autoComplete="off"
        >
          <FormControl
            type="search"
            placeholder="Movie Search"
            className="input-search mx-1 p-2"
            aria-label="search"
            name="query"
            value={query}
            onChange={changeHandler}
            ref={focusDiv}
          ></FormControl>
          <Button
            variant="danger"
            type="submit"
            className="srch-btn mx-1 p-2 "
            disabled={!query}
          >
            Search
          </Button>
        </Form>
      </div>
      <div>
        {movies.length > 0 ? (
          <div className="container">
            <div className="grid">
              {movies.map((movieReq) => (
                <MovieBox key={movieReq.id} {...movieReq} />
              ))}
            </div>
          </div>
        ) : (
          <h2>Sorry !! No Movies Found</h2>
        )}
      </div>
    </>
  );
}

export default Movie;
