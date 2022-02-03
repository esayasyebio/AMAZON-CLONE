import React from 'react'
import './Home.css'
import Product from './../Product/Product';
import Item from '../Item'
import Carousel from 'react-elastic-carousel'

function Home() {
    return (
        <div className="home">
          
            <div className="home__container">
              <div className="home__image">
               
                <Carousel enableAutoplay infiniteLoop pagination={true} autoPlaySpeed={1000} itemsToShow={1}>
                  <Item>
                  <img
                 src="https://m.media-amazon.com/images/I/71PiGY+Y6ML._SX3000_.jpg" alt=""
                  />
                  </Item>
                  <Item>
                  <img
                 src="https://m.media-amazon.com/images/I/71zF1NvfVPL._SX3740_.jpg" alt=""
                  />
                  </Item>
                  <Item>
                  <img
                 src="https://m.media-amazon.com/images/I/71KTLZKee6L._SX3740_.jpg" alt=""
                  />
                  </Item>
                  <Item>
                  <img
                 src="https://m.media-amazon.com/images/I/61pg+50rEtL._SX3000_.jpg" alt=""
                  />
                  </Item>
                  <Item>
                  <img
                 src="https://m.media-amazon.com/images/I/71XGL9CLj8L._SX3740_.jpg" alt=""
                  />
                  </Item>
                </Carousel>
                
              </div>
        {/* <img
          className="home__image"
          src="https://m.media-amazon.com/images/I/71PiGY+Y6ML._SX3000_.jpg"
          alt=""
        /> */}
     <div className="home__row">
       
          <Product
            id=""
            title="GTRACING Gaming Chair with Footrest Speakers Video Game Chair Bluetooth Music Heavy Duty Ergonomic Computer Office Desk Chair Red"
            price={149.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41o48oeiixS._SX160_QL100_AC_SCLZZZZZZZ_.jpg"
          />
          <Product
            id=""
            title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver"
            price={1199.00}
            rating={5}
            image="https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_SR240,110_QL70_.jpg"
          />
          <Product
            id=""
            title="Web Development and Design for Beginners: Learn and Apply the Basic of HTML5, CSS3, JavaScript, jQuery, Bootstrap, DOM, UNIX Command and GitHub - Tools For Building Responsive Websites"
            price={14.97}
            rating={4}
            image="https://m.media-amazon.com/images/I/61E2+k4+uRL._AC_UY218_.jpg"
          />

        </div>
        <div className="home__row">
       
          <Product
            id=""
            title="GDFStudio Christopher Knight Home Karen Traditional Chesterfield Loveseat Sofa, Beige and Dark Brown, 61.75 x 33.75 x 27.75"
            price={566.43}
            rating={4}
            image="https://m.media-amazon.com/images/I/817-NdSVgmL._AC_SY200_.jpg"
          />
          <Product
            id=""
            title="LG 86QNED90UPA Alexa Built-in QNED MiniLED 90 Series 86 4K Smart UHD NanoCell TV (2021)"
            price={3296.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/91RGAILCSPL._AC_UY218_.jpg"
          />
          <Product
            id=""
            title="Modway Amira Tufted Fabric Upholstered Queen Bed Frame With Headboard In White"
            price={218.25}
            rating={4}
            image="https://m.media-amazon.com/images/I/41RoFxe+hiS._AC_SY200_.jpg"
          />
          <Product
            id=""
            title="Hamilton Beach 49976 FlexBrew Trio 2-Way Single Serve Coffee Maker &  Compatible with K-Cup Pods or Grounds, Combo, Black"
            price={100.00}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Fm6-0t5IL._AC_UL640_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
          />
          <Product
            id="23445930"
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal Fabric"
            price={98.99}
            rating={5}
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829332"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            price={1094.98}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
        </div>
        </div>
    )
}

export default Home
