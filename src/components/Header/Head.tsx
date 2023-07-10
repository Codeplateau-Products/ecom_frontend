import React from 'react'

const Head = () => {
  return (
    <>
        <section className="headd">
            <div className="containerr d-flexx">
                <div className="leftt roww">
                    <h6>Welcome to Emarket ! Wrap new offers / gift every single day on Weekends – New Coupon code: Happy2023</h6>
                </div>
                <div className="rightt roww RText">
                    <label>
                        <ul>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false" href="#">$ US Dollar</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <button
                                        className="dropdown-item"
                                        type="button"
                                        name="EUR">
                                            € Euro
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                        className="dropdown-item"
                                        type="button"
                                        name="GPB">
                                            £ Pound Sterling
                                        </button>
                                    </li>
                                    <li>
                                        <button
                                        className="dropdown-item"
                                        type="button"
                                        name="USD">
                                            $ US Dollar
                                        </button>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </label>
                    <label>
                        <ul>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-white" data-bs-toggle="dropdown" aria-expanded="false" href="#">English</a>
                                <ul class="dropdown-menu">
                                    <li>
                                        <button
                                        className="dropdown-item"
                                        type="button"
                                        name="en-gb">
                                            English
                                        </button>
                                    </li>
                                    
                                    <li>
                                        <button
                                        className="dropdown-item"
                                        type="button"
                                        name="ar-ar">
                                            Arabic
                                        </button>
                                    </li>
                                    
                                </ul>
                            </li>
                        </ul>
                    </label>
                    
                </div>
            </div>
        </section>
    </>
  )
}

export default Head;
