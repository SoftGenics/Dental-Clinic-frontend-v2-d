import React from 'react'
import './Testimonial.css'
import Carousel from 'react-bootstrap/Carousel'
import Card from 'react-bootstrap/Card'
function Testimonial() {
  return (
    <>
    <div className='testimonial-container'>
        <h2>Reviews <span style={{color:'#f76840'}}>Testimonial</span></h2>
    <Carousel variant="dark">
    <Carousel.Item interval={1000} className>
            <Card className="text-center testimonial-container-card">
            <Card.Img  src="images/author-image.jpg" className='testimonial-container-img' />
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'#f76840'}}>Doctor</span> Apoorv</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
            </div>
            <Card.Text className='testimonial-container-description'>
            <i className="fas fa-quote-left"/> 
            Lorem ipsum is placeholder text commonly used in the graphic, print,
             and publishing industries for previewing layouts and visual mockups.
            
            <i className="fas fa-quote-right"></i>
            </Card.Text>
        </Card.Body>
        </Card>
    </Carousel.Item>
    <Carousel.Item interval={500}>
    <Card className="text-center testimonial-container-card">
    <Card.Img  src="images/author-image.jpg" className='testimonial-container-img'/>
        <Card.Body>
            <Card.Title className='testimonial-container-title' ><span style={{color:'#f76840'}}>Doctor</span> Sweta Bharti</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
            </div>
            <Card.Text className='testimonial-container-description'>
            <i className="fas fa-quote-left"/> 
            Lorem ipsum is placeholder text commonly used in the graphic, print, 
            and publishing industries for previewing layouts and visual mockups.
            <i className="fas fa-quote-right"></i>
            </Card.Text>
        </Card.Body>
        </Card>
    </Carousel.Item>
    <Carousel.Item>
    <Card className="text-center testimonial-container-card">
    <Card.Img  src="images/author-image.jpg" className='testimonial-container-img'/>
        <Card.Body>
            <Card.Title className='testimonial-container-title'><span style={{color:'#f76840'}}>Doctor</span> Prashant</Card.Title>
            <div className="rating-container">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half"></i>
            </div>
            <Card.Text className='testimonial-container-description'>
            <i className="fas fa-quote-left"/> 
            Lorem ipsum is placeholder text commonly used in the graphic, print, 
            and publishing industries for previewing layouts and visual mockups.
            <i className="fas fa-quote-right"></i>
            </Card.Text>
        </Card.Body>
        </Card>
    </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}

export default Testimonial