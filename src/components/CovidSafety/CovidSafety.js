import React from 'react'
import Container from 'react-bootstrap/Container'
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom'
import Modal from 'react-bootstrap/Modal'
function MyVerticallyCenteredModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Covid-19 Safety
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Wear a mask properly</h4>
        <p>
        Make sure your mask covers your nose, mouth and chin.
Clean your hands before you put your mask on, before and after you take it off, and after you touch it at any time.
When you take off your mask, store it in a clean plastic bag, and every day either wash it if it’s a fabric mask or dispose of it in a trash bin if it’s a medical mask.
Don’t use masks with valves.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button className='badge rounded-pill px-3 btn btn-danger' onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
function CovidSafety() {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <div>
        <Container fluid style={{backgroundColor:'white', padding:'4rem'}}>
          <Container className='text-center d-inline '>
            <p className='text-center fs-5 lh-base'>
               <Link  onClick={() => setModalShow(true)} style={{color:'#f76840', textDecoration:'none'}}>Click here</Link>  to read an update from Dr. Dooley regarding COVID-19 safety 
               <br></br> measure and what to exect at your next appointment.
            </p>
          </Container>
          <hr></hr>
          <Container className='text-center d-inline'>
            <p className='text-center fs-5 lh-base'>
                Enter to win FREE smile makeover, or nominate someone you think
                <br></br>deserves a brand new smiles!
                <br></br>
                <br></br>
                <br></br>
                <Button className='btn--primary'><Link to='#' style={{color:'#ffffff',textDecoration:'none', fontFamily:'Poppins,Helvetica,Arial,Lucida,sans-serif'}}>Contact Us</Link></Button>
            </p>
          </Container>
        </Container>
        <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </div>
  )
}

export default CovidSafety