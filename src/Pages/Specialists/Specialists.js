import React, { useEffect, useState } from 'react';
import Specialist from './Specialist/Specialist';
import './Specialists.css';

const Specialists = () => {
    const [specialists, setSpecialists] = useState([]);
    useEffect(() => {
        fetch('specialists.json')
            .then(res => res.json())
            .then(data =>setSpecialists(data));
    },[])

    return (
        <div>
              <div>
               <h3 className="text-center text-primary">Our Specialists</h3>
              </div>
        <div className="specialists">
                {
                    specialists.map(data => <Specialist
                       specialist={data}
                     ></Specialist>)}      
                  </div>
            </div>  
    );
};

export default Specialists;