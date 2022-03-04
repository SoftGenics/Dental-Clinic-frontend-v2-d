import React from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import Container from 'react-bootstrap/Container'
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Styles.css';
import Footer from '../Footer/Footer';
function WhiteFilling() {
    AOS.init()
    return (
    <>
    <div className='white-filling-container'>
      <h2>
      <span data-aos='zoom-in' data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000" >W</span>
      <span data-aos='zoom-in' data-aos-delay='200' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">H</span>
      <span data-aos='zoom-in' data-aos-delay='300' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">I</span>
      <span data-aos='zoom-in' data-aos-delay='400' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">T</span>
      <span data-aos='zoom-in' data-aos-delay='500' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">E</span>
      <span data-aos='zoom-in' data-aos-delay='600' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">&nbsp;</span>
      <span data-aos='zoom-in' data-aos-delay='700' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">F</span>
      <span data-aos='zoom-in' data-aos-delay='800' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">I</span>
      <span data-aos='zoom-in'  data-aos-delay='900' data-aos-anchor-easing='ease-in-out'data-aos-duration="3000">L</span>
      <span data-aos='zoom-in'  data-aos-delay='1000' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">L</span>
      <span data-aos='zoom-in'  data-aos-delay='1000' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">I</span>
      <span data-aos='zoom-in'  data-aos-delay='1200' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">N</span>
      <span data-aos='zoom-in'  data-aos-delay='1300' data-aos-anchor-easing='ease-in-out' data-aos-duration="3000">G</span>
      </h2>
      <button className='genral-btn' data-aos="fade-up" data-aos-anchor-placement="top-bottom" href="whitefilling">Explore More</button>
    </div>
    <Container className='mt-5 pb-3' id="whitefilling">
      <Row>
        <Col md={6}>
         <Card className='shadow-sm p-3 mb-5 bg-white rounded' data-aos="fade-right"  data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration="2000">
            <Card.Body>
              <Row>
                <Col sm={4}>
                <Card.Img variant="top" src="images/wf1.jpg" />
                </Col> 
                <Col sm={8}>
                <Card.Title style={{fontFamily:'Poppins,Helvetica,Arial,Lucida,sans-serif'}}>Need to Know About White Fillings</Card.Title>
                <Card.Text style={{fontFamily:'Poppins,Helvetica,Arial,Lucida,sans-serif'}}>
                Dental fillings are one of the most frequently performed restorative treatments. <br></br>
                According to Science Daily, the average American has three dental fillings. <br></br>
                One in four people has 11 or more fillings. <br></br>
                Fillings are ubiquitous because the treatment is affordable, versatile, and highly effective at restoring teeth following cavity removal. 
                </Card.Text>
                </Col> 
              </Row>               
            </Card.Body>
          </Card>         
        </Col>
        <Col md={6}>
         <Card className='shadow-sm p-3 mb-5 bg-white rounded' data-aos="zoom-in"  data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration="2000">
            <Card.Body>
              <Row>
                <Col sm={8}>
                <Card.Title>Need to Know About White Fillings</Card.Title>
                <Card.Text>
                Dental fillings are one of the most frequently performed restorative treatments. <br></br>
                According to Science Daily, the average American has three dental fillings. <br></br>
                One in four people has 11 or more fillings. <br></br>
                Fillings are ubiquitous because the treatment is affordable, versatile, and highly effective at restoring teeth following cavity removal. 
                </Card.Text>
                </Col> 
                <Col sm={4}>
                <Card.Img variant="top" src="images/wf2.jpg" />
                </Col> 
              </Row>               
            </Card.Body>
          </Card>         
        </Col>
      </Row>
      <Row className='mt-5'>
        <Col md={4}>
        <Card className='shadow-sm p-3 mb-5 bg-white rounded' data-aos="zoom-in"  data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration="2000">
          <Card.Img variant="top"  src="images/wf2.jpg" />
            <Card.Body>
              <Card.Title>Need to Know About White Fillings</Card.Title>
                <Card.Text>
                Dental fillings are one of the most frequently performed restorative treatments. <br></br>
                According to Science Daily, the average American has three dental fillings. <br></br>
                One in four people has 11 or more fillings. <br></br>
                Fillings are ubiquitous because the treatment is affordable, versatile, and highly effective at restoring teeth following cavity removal. 
                </Card.Text>
              </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card className='shadow-sm p-3 mb-5 bg-white rounded' data-aos="zoom-in"  data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration="2000">
          <Card.Img variant="top" src="images/wf3.jpg" />
            <Card.Body>
              <Card.Title>White Composite Fillings</Card.Title>
                <Card.Text>
                Dental fillings are one of the most frequently performed restorative treatments. <br></br>
                According to Science Daily, the average American has three dental fillings. <br></br>
                One in four people has 11 or more fillings. <br></br>
                Fillings are ubiquitous because the treatment is affordable, versatile, and highly effective at restoring teeth following cavity removal. 
                </Card.Text>
              </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
        <Card className='shadow-sm p-3 mb-5 bg-white rounded' data-aos="zoom-in"  data-aos-delay='100' data-aos-anchor-easing='ease-in-out' data-aos-duration="2000">
          <Card.Img variant="top" src="images/wf6.jpg" />
            <Card.Body>
              <Card.Title>White Composite Fillings</Card.Title>
                <Card.Text>
                ental fillings are used to fill cavities cause by dental decay.<br></br>
                Tooth colored dental fillings can also repair minor tooth injury such as cracked or broken teeth. <br></br>
                Fillings are commonly done with materials called composite or resin.  <br></br>
                These materials are designed to match the color of your teeth. <br></br>
                Tooth colored fillings are the preferred method of tooth restoration.
                </Card.Text>
              </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
    <Footer />
    </>   
              
    );
  }

export default WhiteFilling