import React from 'react';
import { Link } from 'react-router-dom';
import './HomeCard.css';

const HomeCard = ({ service }) => {
    console.log(service);
    const { img, title, description } = service;
    return (
        <div className="images">
            <div class="card">
            <img src={img} class="card-img-top" alt="..."/>
            <div class="card-body">
                    <h5 class="card-title">{ title}</h5>
            <p class="card-text">{description}.</p>
          <Link to="/register" class="btn btn-primary">Details Here</Link>
              </div>
            </div>
            
        </div>
    );
};

export default HomeCard;