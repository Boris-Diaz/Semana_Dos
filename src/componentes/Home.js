import React from 'react'

function Home() {
  return (
    <>
<div id="carouselExampleCaptions" class="carousel slide">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      
      <img src="../imagenes/img1.jpg" class="d-block w-100" alt="..."/>
      
      <div className="carousel-caption d-none d-md-block">
      <h1> FRONTEND BORIS DIAZ </h1>
        <p>Especializacion UNIMINUTO  Desarrollo de Aplicaciones Web NRC-50518 </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../imagenes/img2.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1> FRONTEND BORIS DIAZ </h1>
        <p>Especializacion UNIMINUTO  Desarrollo de Aplicaciones Web NRC-50518 </p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="../imagenes/img3.jpg" className="d-block w-100" alt="..."/>
      <div className="carousel-caption d-none d-md-block">
      <h1> FRONTEND BORIS DIAZ </h1>
        <p>Especializacion UNIMINUTO  Desarrollo de Aplicaciones Web NRC-50518 </p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </>
  )
}

export default Home;