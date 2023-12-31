import React from "react";

const Search = () => {
  window.addEventListener("scroll", function () {
    const search = this.document.querySelector(".searchh");
    search.classList.toggle("active", window.scrollY > 100);
  });
  return (
    <>
      <section className="searchh">
        <div className="containerr c-flexx">
          <div className="categories d-flexx">
            <span className="fa fa-bars"></span>
            <h4>
              Categories <i className="fa fa-chevron-down"></i>
            </h4>
          </div>

          <div className="search-box f-flexx">
            <select className="chosen-select" name="category_id">
              <option value="0"><span className="allcat">All Category</span></option>

              <option value="24 ">Accessories</option>

              <option value="76">&nbsp;&nbsp;&nbsp;Cellphone</option>

              <option value="85">&nbsp;&nbsp;&nbsp;Cosmetics</option>

              <option value="74">&nbsp;&nbsp;&nbsp;Electronics</option>

              <option value="73">&nbsp;&nbsp;&nbsp;Fashion</option>

              <option value="75">&nbsp;&nbsp;&nbsp;Handbags</option>

              <option value="84">&nbsp;&nbsp;&nbsp;Jewelry</option>

              <option value="83">&nbsp;&nbsp;&nbsp;Smart TVs</option>

              <option value="124 ">Add Color to Your Walls!</option>

              <option value="138 ">Automotive &amp; Industrial</option>

              <option value="127 ">Bags, Wallet &amp; Travel</option>

              <option value="132 ">Beauty</option>

              <option value="139 ">Beauty &amp; Health</option>

              <option value="142 ">Books &amp; Audible</option>

              <option value="126 ">Clothing</option>

              <option value="137 ">Clothing, Shoes &amp; Jewelry</option>

              <option value="57 ">Collections</option>

              <option value="81">&nbsp;&nbsp;&nbsp;Appliances</option>

              <option value="78">&nbsp;&nbsp;&nbsp;Fashion</option>

              <option value="80">
                &nbsp;&nbsp;&nbsp;Furniture &amp; Decor
              </option>

              <option value="82">&nbsp;&nbsp;&nbsp;Sine engain</option>

              <option value="77">&nbsp;&nbsp;&nbsp;Smartphone</option>

              <option value="79">&nbsp;&nbsp;&nbsp;Sport bikes</option>

              <option value="143 ">Cosmetics</option>

              <option value="123 ">Daily Essentials!</option>

              <option value="129 ">Decor</option>

              <option value="130 ">Dining</option>

              <option value="131 ">Dining</option>

              <option value="136 ">Electronics &amp; Computer</option>

              <option value="144">&nbsp;&nbsp;&nbsp;Apple</option>

              <option value="145">&nbsp;&nbsp;&nbsp;Laptop</option>

              <option value="34 ">Fashion</option>

              <option value="43">&nbsp;&nbsp;&nbsp; Accessories</option>

              <option value="44">&nbsp;&nbsp;&nbsp;Bags</option>

              <option value="47">&nbsp;&nbsp;&nbsp;Jewelry</option>

              <option value="39">&nbsp;&nbsp;&nbsp;Men's Clothing</option>

              <option value="48">&nbsp;&nbsp;&nbsp;Shoes</option>

              <option value="38">&nbsp;&nbsp;&nbsp;Watches</option>

              <option value="37">&nbsp;&nbsp;&nbsp;Women's Wear</option>

              <option value="125 ">Fashion</option>

              <option value="20 ">Furnitures</option>

              <option value="67">&nbsp;&nbsp;&nbsp;Bathroom</option>

              <option value="68">&nbsp;&nbsp;&nbsp;Bedroom</option>

              <option value="27">&nbsp;&nbsp;&nbsp;Decor</option>

              <option value="65">&nbsp;&nbsp;&nbsp;Furniture</option>

              <option value="26">&nbsp;&nbsp;&nbsp;Living room</option>

              <option value="66">&nbsp;&nbsp;&nbsp;Theid cupensg</option>

              <option value="133 ">Gifting</option>

              <option value="98 ">Handbags</option>

              <option value="100 ">Headphone</option>

              <option value="99 ">Health &amp; Beauty</option>

              <option value="110 ">Home</option>

              <option value="112">&nbsp;&nbsp;&nbsp;Crockery</option>

              <option value="111">&nbsp;&nbsp;&nbsp;Cushions</option>

              <option value="116">
                &nbsp;&nbsp;&nbsp;Lunch Bags &amp; Boxes
              </option>

              <option value="114">&nbsp;&nbsp;&nbsp;Trays</option>

              <option value="115">&nbsp;&nbsp;&nbsp;Trunks &amp; Boxes</option>

              <option value="113">&nbsp;&nbsp;&nbsp;Wall Clocks</option>

              <option value="140 ">Home, Garden &amp; Tools</option>

            
              <option value="101">&nbsp;&nbsp;&nbsp;Appliances</option>

              <option value="46">
                &nbsp;&nbsp;&nbsp;Furniture &amp; Decors
              </option>

              <option value="45">&nbsp;&nbsp;&nbsp;Lamp &amp; Lighting</option>

              <option value="70">&nbsp;&nbsp;&nbsp;Punge nenune</option>

              <option value="71">&nbsp;&nbsp;&nbsp;Qunge genga</option>

              <option value="72">&nbsp;&nbsp;&nbsp;Sofa &amp; Chairs</option>

              <option value="69">&nbsp;&nbsp;&nbsp;Sound &amp; Life</option>

              <option value="17 ">Watches</option>

              <option value="128 ">Watches &amp; Footwear</option>

              <option value="102 ">Watches (Layout 14)</option>

              <option value="103">&nbsp;&nbsp;&nbsp;Automatic</option>

              <option value="104">&nbsp;&nbsp;&nbsp;Casual</option>

              <option value="105">&nbsp;&nbsp;&nbsp;Ceramic</option>

              <option value="106">&nbsp;&nbsp;&nbsp;Chronograph</option>

              <option value="108">&nbsp;&nbsp;&nbsp;Kevincons</option>

              <option value="109">&nbsp;&nbsp;&nbsp;Pastrami</option>

              <option value="107">&nbsp;&nbsp;&nbsp;Patheon</option>

              <option value="25 ">Electronics</option>

              <option value="29">&nbsp;&nbsp;&nbsp;Asdipiscing</option>

              <option value="95">&nbsp;&nbsp;&nbsp;Consectetur</option>

              <option value="35">&nbsp;&nbsp;&nbsp;Diam sit</option>

              <option value="36">&nbsp;&nbsp;&nbsp;Labore et</option>

              <option value="96">&nbsp;&nbsp;&nbsp;Reprehenderit</option>

              <option value="94">&nbsp;&nbsp;&nbsp;Sit amet</option>

              <option value="28">&nbsp;&nbsp;&nbsp;Monitors</option>

              <option value="30">&nbsp;&nbsp;&nbsp;Printers</option>

              <option value="31">&nbsp;&nbsp;&nbsp;Scanners</option>

              <option value="32">&nbsp;&nbsp;&nbsp;Web Cameras</option>
            </select>
      
            <input type="text" placeholder="Search" />
            <button><i className="fa fa-search text-white"></i></button>
          </div>

          <div className="icon f-flexx widthh">
            <i className="fa fa-user text-white icon-circle"></i>
            <div className="cart">
              <a href="/">
                <i className="fa fa-shopping-bag text-white icon-circle"></i>
                <span>0</span>
              </a>
            </div>
          </div>
          <div className="mycart text-white fw-bold">
            MY CART <span>- $0.00</span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Search;
