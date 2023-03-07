import React from 'react'
import "./Footer.css"
import { FiFacebook, FiYoutube, FiInstagram, FiTwitter } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";


function Footer() {
  return (
    <div>

      <footer>

        <div class="footer-content" >

          <h3>Project Managment Syatem</h3>
          <p>qwertyuiolkcvmblkdjgiubvheotiy bjyoirjyjoinu t oijt oiertyrjyoi iju54tvoib5uyoinb5uro oi45utvboi56yuoi iu45iombjmye</p>
          <ul class="socials">
            <li><a href="#"><FiFacebook /></a></li>
            <li><a href="#"><FiTwitter /></a></li>
            <li><a href="#"><FiInstagram /></a></li>
            <li><a href="#"><FiYoutube /></a></li>
            <li><a href="#"><FaLinkedin /></a></li>
          </ul>

        </div>

      </footer>

    </div>
  )
}

export default Footer