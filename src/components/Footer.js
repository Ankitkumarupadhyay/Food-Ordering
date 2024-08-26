import React from 'react'
import '../CSS/footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook , faInstagram,faGithub,faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {faCopyright } from "@fortawesome/free-solid-svg-icons"


const Footer = () => {
  return <>
  
  <footer>
  <FontAwesomeIcon icon={faCopyright} /> 2024 All Rights Reserved <br /> Designed by <span className='text-white font-semibold underline'> <a target='_blank' href="https://www.linkedin.com/in/ankit-kumar-upadhyay-5005b3244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">Ankit Kumar Upadhyay</a> </span> <br />
            <div className="footer_links">
                <a target='blank' href="https://www.instagram.com/ankit__upadhyay_3800?igsh=bWVsamUzbG51cnBr" ><FontAwesomeIcon icon={faInstagram} beatFade /></a>
                <a target='blank' href="https://www.facebook.com/profile.php?id=100023545757586"><FontAwesomeIcon icon={faFacebook} beatFade /></a>
                <a target='blank' href="https://www.linkedin.com/in/ankit-kumar-upadhyay-5005b3244?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FontAwesomeIcon icon={faLinkedin} beatFade /></a>
                <a href="https://github.com/Ankitkumarupadhyay" target='blank'><FontAwesomeIcon icon={faGithub} beatFade /></a>
            </div>
        </footer>
  </>
}

export default Footer
