import * as React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { Button } from 'react-bootstrap'
import { heroPage, heroPageLeft, heroButton, heroImage } from '../styles/hero.module.css'

function hero() {
  return (
    <div id='hero' className={heroPage}>
      <div>
        <div className={heroPageLeft}>
          <h2>Web Developer</h2>
          <h1>Solving Problems +<br />Delivering Solutions</h1>
          <p>Utilizing front end frameworks to build user friendly applications.</p>
          <Link to='/#projects'><Button className={heroButton} style={{background: "#e1742b"}}>Check Out My Projects</Button></Link>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <StaticImage src='../images/hero.png' alt='Hero Image' className={heroImage} />
      </div>
    </div>
  )
}

export default hero