import React from 'react';
import * as ReactBootStrap from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import './Header.css'
function LoginModal(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Patient Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button className=' btn btn-danger' type="submit" size="lg">
    Login
  </Button>
</Form>
      </Modal.Body>

    </Modal>
  );
}
const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return <div>
  <ReactBootStrap.Navbar  variant="light" fixed='top' className='top-nav mb-3'>
   <ReactBootStrap.Container>
    <ReactBootStrap.Nav className="navbar-nav ms-auto mb-2 mb-lg-0">
      <ReactBootStrap.Nav.Link href="tel:+919380359418"><i className="fas fa-phone-alt" />+91 9380359418</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link onClick={() => setModalShow(true)}><i className="fas fa-sign-in-alt" />&nbsp;&nbsp;Patient Login</ReactBootStrap.Nav.Link>
      <ReactBootStrap.Nav.Link href="#pricing">PayBill</ReactBootStrap.Nav.Link>
    </ReactBootStrap.Nav>
    </ReactBootStrap.Container>
  </ReactBootStrap.Navbar>
  <LoginModal 
    show={modalShow}
    onHide={() => setModalShow(false)}
  />
  </div>;
};
export default Header;
