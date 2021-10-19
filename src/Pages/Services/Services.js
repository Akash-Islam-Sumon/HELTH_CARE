import useAuth from '../../Hooks/useAuth';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const {services}=useAuth()
    
    return (
        <div className="services">
            <div><h2 className="text-primary services-header">Our Services</h2></div>
     <div className="service-container">
       
       {
          services.map(service => <Service
          service={service}
          ></Service>)
     }
 </div>
       </div>
    );
};

export default Services;