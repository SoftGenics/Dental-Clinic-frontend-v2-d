import React from 'react'
import {Row, Col, Container} from 'react-bootstrap';

function Features(props) {
  return (
    <>
    <Row>
      <Col md={8}>
        <Container style={{marginTop:'10rem', marginLeft:'5rem'}}>
          <h2 ><strong>What is a root canal?</strong></h2>
          <hr></hr>
          <p>A root canal is a dental procedure involving the removal of the soft center of the tooth, the pulp. The pulp is made up of nerves, connective tissue, and blood vessels that help the tooth grow.</p>
          <p>n the majority of cases, a general dentist or endodontist will perform a root canal while you’re under local anesthesia.</p>
          <br></br>
          <p>Learn more about this common procedure, as well as the potential risks involved.</p>
          <br></br>
          <h2><strong>When is a root canal needed?</strong></h2> <hr></hr>
          <p>A root canal is performed when the soft inner part of a tooth, known as the pulp, is injured or becomes inflamed or infected.</p>
          <br></br>
          <p>The crown of the tooth — the part you can see above your gums — can remain intact even if the pulp is dead. Removing injured or infected pulp is the best way to preserve the structure of the tooth.</p>
          <br></br>
          <p>Common causes of damage to the pulp include:</p>
          <br></br>
          <ul>
            <li>deep decay due to an untreated cavity</li>
            <li>multiple dental procedures on the same tooth</li>
            <li>a chip or crack in the tooth</li>
            <li>n injury to the tooth (you might injure a tooth if you get hit in the mouth; the pulp can still be damaged even if the injury doesn’t crack the tooth)</li>
          </ul>
          <br></br>
          <p>The most common symptoms of damaged pulp include pain in your tooth, and swelling and a sensation of heat in your gums. Your dentist will examine the painful tooth and take X-rays to confirm the diagnosis. Your dentist may refer you to an endodontist if they think you need a root canal.</p>
        </Container>
      </Col>
    </Row>
    </>
  )
}


export default Features
