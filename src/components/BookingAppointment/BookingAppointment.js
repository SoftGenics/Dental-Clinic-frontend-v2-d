import React from 'react'
import Form from 'react-bootstrap/Form'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './BookingAppointment.css'
function BookingAppointment() {
return (
    <div>
     <section className="appointment" data-stellar-background-ratio="3">
          <div className="container">
               <Row>

                    <Col md={6} sm={6}>
                         <img src="images/appointment-image.jpg" className="img-responsive" alt="" />
                    </Col>

                    <Col md={6} sm={6}>
                         <Form id="appointment-form" action="http://localhost:4000/api/user" method="post" encType=''>
                                <div className='text-center d-inline mb-b'>
                                   <h2 className='mb-5' sty>Make an <span style={{color:'#f76840'}}>Appointment</span></h2>
                                </div>
                                   <Row>
                                   <Col md={6} sm={6}>
                                        <Form.Label for="name">Name</Form.Label>
                                        <Form.Control type="text" className="form-control" name="name" placeholder="Full Name" />
                                   </Col>

                                   <Col md={6} sm={6}>
                                        <Form.Label for="email">Email</Form.Label>
                                        <Form.Control type="email" className="form-control" name="email"  placeholder="Your Email" />
                                   </Col>
                                    </Row>
                                    <Row>
                                     <Col md={6} sm={6}>
                                     <Form.Label for="gender">Select Gender</Form.Label>
                                     {['radio'].map((type) => (
                                        <div key={`inline-${type}`} className="mb-3">
                                        <Form.Check
                                             inline
                                             label="Male"
                                             name="gender"
                                             type={type}
                                             id={`inline-${type}-1`}
                                             />
                                             <Form.Check
                                             inline
                                             label="Female"
                                             name="gender"
                                             type={type}
                                             id={`inline-${type}-2`}
                                             />
                                             <Form.Check
                                             inline
                                             label="Others"
                                             name="gender"
                                             type={type}
                                             value="others"
                                             id={`inline-${type}-3`}
                                             />
                                        </div>
                                        ))}
                                     </Col>
                                     <Col md={6} sm={6}>
                                     <Form.Label for="select">Select Age</Form.Label>
                                        <Form.Select className="form-control" name="department">
                                             <option>0-18</option>
                                             <option>18-30</option>
                                             <option>30-60</option>
                                             <option>60-80</option>
                                        </Form.Select>
                                     </Col>
                                    </Row>
                                    <Row>
                                   <Col md={6} sm={6}>
                                        <Form.Label for="date">Select Date</Form.Label>
                                        <Form.Control type="date" name="date" className="form-control" />
                                   </Col>

                                   <Col md={6} sm={6}>
                                        <Form.Label for="select">Select Department</Form.Label>
                                        <Form.Select className="form-control" name="department">
                                             <option>General Health</option>
                                             <option>Cardiology</option>
                                             <option>Dental</option>
                                             <option>Medical Research</option>
                                        </Form.Select>
                                   </Col>
                                    </Row>
                                   <Col md={12} sm={12}>
                                        <Form.Label for="telephone">Phone Number</Form.Label>
                                        <Form.Control type="tel" className="form-control" name="p_number" placeholder="Phone"/>
                                        <Form.Label for="Message">Decribe Problem:</Form.Label>
                                        <Form.Control as="textarea" className="form-control mb-3" rows="5" name="message" placeholder="You can describe your problem here..."></Form.Control>
                                   </Col>
                              <Row>
                              <Col md={12} sm={12}>
                                 <label className="mx-3" for="myfile">Any prescription ? </label>
                                 <input type="file" id="myfile" name="myfile" className='upload-btn' />
                                 <button type="submit" className="form-control" id="cf-submit" >Submit Button</button>
                                 </Col>
                              </Row>

                        </Form>
                    </Col>

               </Row>
          </div>
     </section>

    </div>
  )
}

export default BookingAppointment