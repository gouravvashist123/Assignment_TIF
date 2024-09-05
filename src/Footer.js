import React from 'react'
import food_truck from './images/Screenshot 2024-09-05 150341.png';
import './Footer.css'

function Footer() {
  return (
    <div class="footer">
        <div class="footer-container">
            <div class="footer-left">
                <img src={food_truck} alt="Food Truck Logo" class="footer-logo"/>
            </div>
            <div class="footer-center">
                <h3>Contact Us</h3>
                <address>
                    Lorem Ipsum Pvt Ltd, S1, Magalton Road, Phartosh Gate near YTM Market, XYZ-343434<br/>
                    Email: example2020@gmail.com<br/>
                    Phone: (904) 443-0343
                </address>
            </div>
            <div class="footer-right">
                <div class="footer-links">
                    <h3>More</h3>
                    <ul>
                        <li><a href="#">About Us</a></li>

    <li><a href="#">Products</a></li>
    <li><a href="#">Career</a></li>
    <li><a href="#">Contact Us</a></li>
</ul>
</div>
<div class="footer-social">
<h3>Social Links</h3>
<a href="#"><img src="instagram-icon.png" alt="Instagram"/></a>
<a href="#"><img src="twitter-icon.png" alt="Twitter"/></a>
<a href="#"><img src="facebook-icon.png" alt="Facebook"/></a>
</div>
</div>
</div>
<p class="footer-copyright">© 2022 Food Truck Example</p>
</div>

  )
}

export default Footer
