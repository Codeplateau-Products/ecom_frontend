import React from 'react'
import payment from '../../assets/images/payment.png';

const Services = () => {
  return (
    <div>
      <div className="service">
        <div className='service1'>
          <li><a href="#">Online Shopping</a></li><span>|</span>
          <li><a href="#">Promotions</a></li><span>|</span>
          <li><a href="#">Privacy Policy</a></li><span>|</span>
          <li><a href="#">Site Map</a></li><span>|</span>
          <li><a href="#">Orders and Returns</a></li><span>|</span>
          <li><a href="#">Help</a></li><span>|</span>
          <li><a href="#">Contact Us</a></li><span>|</span>
          <li><a href="#">Support</a></li><span>|</span>
          <li><a href="#">Most Populars</a></li><span>|</span>
          <li><a href="#">New Arrivals</a></li><span>|</span>
          <li><a href="#">Special Products</a></li><span>|</span>
        </div>
                  
        <div className='service1'>
          <li><a href="#">Manufacturers</a></li><span>|</span>
          <li><a href="#">Shipping</a></li><span>|</span>
          <li><a href="#">Payments</a></li><span>|</span>
          <li><a href="#">Returns</a></li><span>|</span>
          <li><a href="#">Refunds</a></li><span>|</span>
          <li><a href="#">Warantee</a></li><span>|</span>
          <li><a href="#">Service</a></li><span>|</span>
          <li><a href="#">Customer</a></li><span>|</span>
          <li><a href="#">Discount</a></li><span>|</span>
          <li><a href="#">Our Stores</a></li><span>|</span>
          <li><a href="#">Checkout</a></li><span>|</span>
        </div>
        <div className='service1'>
          <li>
            <img src={ payment } alt="" />
          </li>
          
        </div>
      </div>
    </div>
  )
}


export default Services;