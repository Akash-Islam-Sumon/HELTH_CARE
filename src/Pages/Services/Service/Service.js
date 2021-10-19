import React from 'react';
import './Service.css';

const Service = (props) => {
    // console.log(props);
    const { img, title } = props.service;
    return (
        <div className="service">
                <div classNsme="card service">
                <img src={img} classNsme="card-img-top" alt="..."/>
                <div classNsme="card-body">
                    <h5 classNsme="card-title">{title}</h5>
                <p classNsme="card-text">Som card title and make up the bulk of the card's content.</p>
                <button className="btn btn-primary">Details</button>
                </div>
                </div>
            
        </div>
    );
};

export default Service;