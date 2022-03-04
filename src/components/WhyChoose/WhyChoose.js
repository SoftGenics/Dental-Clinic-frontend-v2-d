import React from 'react'
import Card from 'react-bootstrap/Card'
import CardGroup from 'react-bootstrap/CardGroup'
import Container from 'react-bootstrap/Container'

function WhyChoose() {
  return (
    <div>
<Container fluid style={{backgroundColor:'white', padding:'4rem'}}>
  <h2 style={{marginBottom:'5rem', textAlign:'center'}}>Why Choose Us?</h2>
<CardGroup>
  <Card border="light" className='text-center'>
    <i class="far fa-check-circle" style={{color:'#f76840', fontSize:'28px'}}></i>
    <Card.Body>
      <Card.Title>Compreshensive Services</Card.Title>
      <Card.Text>
        We're your one-stop-shop for dentail care.
        <br></br>Whatever you're experiencing, we have 
        <br></br>the experience, technology, and 
        <br></br>compassion to help reach your goals.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="light" className='text-center'>
    <i class="far fa-check-circle" style={{color:'#f76840', fontSize:'28px'}}></i>
    <Card.Body>
      <Card.Title>Care When You need it</Card.Title>
      <Card.Text>
        We offer-same-day care for when you're in 
       <br></br> paain or facing an emergency. Early 
       <br></br>morning and evening appointments are
       <br></br>availble to fit your busy schedule.
      </Card.Text>
    </Card.Body>
  </Card>
  <Card border="light" className='text-center'>
    <i class="far fa-check-circle" style={{color:'#f76840', fontSize:'28px'}}></i>
    <Card.Body>
      <Card.Title >Your Confort, Our Priority</Card.Title>
      <Card.Text>
        Enjoy a relaxing office evironment,
        <br></br>welcoming team and sooting amenities.
        <br></br>Plus, we offer advanced sedation options
        <br></br>to ensure your confort and help those
        <br></br>with anxiety
      </Card.Text>
    </Card.Body>
  </Card>
</CardGroup>
</Container>
    </div>
  )
}

export default WhyChoose