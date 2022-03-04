import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Iframe from 'react-iframe'
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import './OfficeInfo.css'

function OfficeInfo() {
  return (
    <div>
        <Container fluid style={{backgroundColor:'white', padding:'4rem'}}>
            <Row>
                 <Col md={6}>
                     <Container >
                        <h2>Office Information</h2>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-phone-alt"></i>&nbsp;Phone:&nbsp;<a href='tel:+919380359418'style={{color:'rgb(243, 40, 13)', textDecoration:'none'}} >+919380359418</a><br></br>
                        </div>
                        <div className=' mt-5 h5'>
                        <i className="fas fa-clock"></i>&nbsp;Hours:
                        </div>
                        <div className=' mt-3 mb-5 office-info-section'>
                        <p>Monday&nbsp;/Tuesday&nbsp;/Thursday:&nbsp;7am - 7pm</p>
                        <p>Wednesday&nbsp;/Friday:&nbsp;8am - 5pm</p>
                        <p>Every other Saturday:&nbsp;8am - 1pm</p>
                        </div>
                        <h5>Follow us!</h5>
                        <div className='px-2 mt-3 mb-3 follow-icon'>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-facebook"></i></Link>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-instagram-square"></i></Link>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-youtube"></i></Link>
                        <Link to='#' className='follow-icon-link'><i className="fab fa-google-plus"></i></Link>
                        </div>
 
                     </Container>
                </Col>
                <Col md={6}>
                <Iframe url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14393.200665859562!2d85.1426028!3d25.5949401!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xff414c58b11be6e1!2sSoftGenics%20India%20Private%20Limited!5e0!3m2!1sen!2sin!4v1644961686114!5m2!1sen!2sin"
                    width="100%"
                    height="450px"
                    id="myId"
                    className="myClassname"
                    display="initial"
                    position="relative"/>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default OfficeInfo