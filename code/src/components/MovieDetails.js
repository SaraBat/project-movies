import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './MovieDetails.css';
import NotFound from './NotFound';

export const MovieDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState({});
  const navigate = useNavigate();
  const [error, setError] = useState(false)

  const onGoToNotFoundButtonClick = () => {
    navigate('/');
  }

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=37960b018b2292cd4182bc4096fb83c8&language=en-US`)
      .then((response) => response.json())
      .then((data) => {
        if (data.id) {
          setDetails(data)
        } else {
          setError(true)
        }
      })
      .catch(() => setError(true))
  }, [id]);

  if (error) {
    return <NotFound />
  }

  return (
    <div
      className="MovieDetailsRender"
      style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w1280${details.backdrop_path})` }}>
      <div className="button-container">
        <button className="backButton" type="button" onClick={onGoToNotFoundButtonClick}>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z" fill="#fff" /></svg>
          Back
        </button>
      </div>
      <div className="movieAndInfo">
        <div className="movieImage">
          <img src={`https://image.tmdb.org/t/p/w300${details.poster_path}`} alt={details.title} />
        </div>
        <div className="MovieTextBlock">
          <div className="movieInfo">
            <div className="title-and-rating">
              <h1>{details.title}</h1>

              <h2>⭐<span>{Math.round(details.vote_average * 10) / 10}</span></h2>
            </div>
          </div>
          <div className="MovieSummary">
            <p>{details.overview}</p>
          </div>
        </div>
      </div>
      <div className="shadow" />
    </div>
  )
}
