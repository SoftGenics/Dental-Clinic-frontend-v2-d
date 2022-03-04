import React from 'react'
import Container from 'react-bootstrap/Container'
import { Button } from '../Button/Button';
import { Link } from 'react-router-dom'

function QuestionsHelp() {
  return (
    <div>
        <Container fluid style={{backgroundColor:'white', padding:'4rem'}}>
            <Container>
                <div className='text-center'>
                    <h2 className='mb-5'>Questions? Our Team is Here to Help!</h2>
                    <Button buttonStyle='btn--primary'><Link to='#' style={{color:'#ffffff',textDecoration:'none', fontFamily:'Poppins,Helvetica,Arial,Lucida,sans-serif'}}>Contact Us</Link></Button>
                    <p className='mt-5'>Or call +919380359418</p>
                </div>
            </Container>
        </Container>
    </div>
  )
}

export default QuestionsHelp