import React from 'react'

const Newsletter = () => {
  return (
    <>
      <section id="newsletter">
        <div className='ms-3'>
          <i className="fa fa-paper-plane"></i>
        </div>
        
        <div className="newstext">
          
          <h4>Signup For Newsletter</h4>
          <p>We’ll never share your email address with a third-party.</p>
        </div>
        <div className="form">
          <input type="text" placeholder='Your email address...' />
          <button>Subscribe</button>
        </div>
        <div className='socials'>
          <a href="/"><i className="fa fa-facebook"></i></a>|
          <a href="/"><i className="fa fa-twitter"></i></a>|
          <a href="/"><i className="fa fa-instagram"></i></a>|
          <a href="/"><i className="fa fa-pinterest"></i></a>
        </div>
      </section>
    </>
  )
}

export default Newsletter;
