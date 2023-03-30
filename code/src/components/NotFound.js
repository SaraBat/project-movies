import React from 'react';
import { useNavigate } from 'react-router-dom';
import './notfound.css';

const NotFound = () => {
  const navigate = useNavigate();
  const GoBackHome = () => {
    navigate('/');
  }
  return (
    <div className="not-found-container">
      <p> Sorry this page does not exist.😔</p>
      <button type="button" onClick={GoBackHome}><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><path d="M10 20A10 10 0 1 0 0 10a10 10 0 0 0 10 10zm1.289-15.7 1.422 1.4-4.3 4.344 4.289 4.245-1.4 1.422-5.714-5.648z" fill="#fff" /></svg>
          Go back to homepage
      </button>
    </div>
  );
}

export default NotFound