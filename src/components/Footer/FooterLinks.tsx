import React from 'react'
import logofooter from '../../assets/images/logo-footer.png'

const FooterLinks = () => {
  return (
    <div>
      <footer className='footerlinks'>
        <div className="coll">
          <img src={ logofooter } alt="logofooter" />
          <p className='mt-4'>San Luis Potosí, Centro Historico,<br />78000 San Luis Potosí, SPL, Mexico</p>
          <p>(+0214)0 315 215 - (+0214)0 315 215</p>
          <p>Contact@Opencartworks.Com</p>
          <p>Open Time: 8:00AM - 6:00PM</p>
        </div>
        <div className='coll'>
          <h4>INFORMATION</h4>
          <hr />
          <li><a href="#">About us</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Warranty Services</a></li>
          <li><a href="#">Support 24/7 page</a></li>
          <li><a href="#">Product Registration</a></li>
          <li><a href="#">Product Support</a></li>
        </div>
        <div className='coll'>
          <h4>MY ACCOUNT</h4>
          <hr />
          <li><a href="#">Brands</a></li>
          <li><a href="#">Gift Certificates</a></li>
          <li><a href="#">Affiliates</a></li>
          <li><a href="#">Specials</a></li>
          <li><a href="#">FAQs</a></li>
          <li><a href="#">Custom Link</a></li>
          <li><a href="#">Product Support</a></li>
        </div>
        <div className='coll'>
          <h4>SERVICES</h4>
          <hr />
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Site Map</a></li>
          <li><a href="#">Customer Service</a></li>
          <li><a href="#">Custom Link</a></li>
        </div>
        <div className='coll'>
          <h4>INSTAGRAM GALLERY</h4>
          <hr />
          <li><a href="#">Contact Us</a></li>
          <li><a href="#">Returns</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Site Map</a></li>
          <li><a href="#">Customer Service</a></li>
          <li><a href="#">Custom Link</a></li>
        </div>
      </footer>
    </div>
  )
}


export default FooterLinks;