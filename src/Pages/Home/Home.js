import React from 'react';
import './Home.css';
import { Container } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import HomeCard from '../HomeCerd/HomeCard';

const Home = () => {
    const { services } = useAuth([])
    const { img,title } = services;
    return (
        <div>
            <div className="curosel">
            <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src={'https://i.ibb.co/5cw68rr/istockphoto-855680246-612x612.png'} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h4 className="text-warning">AKASH CARE HOSPITAL LTD.</h4>
        <h5 className="text-danger">PREVENTION IS BETTER THAN CURE !!!.</h5>
      </div>
    </div>
    <div class="carousel-item">
      <img src={'https://i.ibb.co/5cw68rr/istockphoto-855680246-612x612.png'} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div class="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
            </div>
            <Container>
                <div className="homeCerd">
                {
                        services.map(service => <HomeCard
                            key={service.id}
                        
                            service={service}
                        
                        ></HomeCard>
                    
                 )
            }
                </div>


            </Container>
          
        </div>
    );
};

export default Home;