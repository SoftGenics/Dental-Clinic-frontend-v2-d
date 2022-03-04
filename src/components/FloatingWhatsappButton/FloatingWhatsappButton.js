import React from 'react'
import FloatingWhatsApp from 'react-floating-whatsapp'
import styled from 'styled-components'
const Messenger = styled.a`
position:fixed;
width:60px;
height:60px;
bottom:35px;
right:100px;
margin-right:30px;
background-color:rgb(76, 161, 240);
color:#FFF;
border-radius:50px;
text-align:center;
box-shadow: 2px 2px 3px #999;
`;

function FloatingWhatsappButton(props) {
  return (
    <div>
    <FloatingWhatsApp
        phoneNumber="+919380359418"
        accountName="Dental-Clinic"
        allowClickAway
        notification
        notificationDelay={60000} // 1 minute
      />
      <Messenger href='https://www.facebook.com/messages/t/Prashant.Srivastav.0204/' target="_blank">
      <i class="fab fa-facebook-messenger" style={{marginTop:'7px', fontSize:'50px'}}></i>
      </Messenger>
  
    </div>
  )
}


export default FloatingWhatsappButton