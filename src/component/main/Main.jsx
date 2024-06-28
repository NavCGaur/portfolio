import React from 'react'

import './Main.css'

import {ReactComponent as Github} from '../../assets/github.svg'
import {ReactComponent as LinkedIn} from '../../assets/linkedin.svg'
import {ReactComponent as Twitter} from '../../assets/twitter.svg'
import ProfilePic from '../../assets/profilepic.jpg'

function Main() {
  return (
    <div className='main'>
        <div className='main__leftSection'>
            <div className='main__text'>
                <h1>Hi, It's <span>Naveen</span></h1>
                <h2>I'm a <span>Web Developer</span></h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Neque natus eveniet, debitis inventore hic, odit nisi dolore laudantium placeat reprehenderit dolor, unde voluptatibus eligendi iste minus sunt numquam magni labore.</p>

            </div>

            <div className='main__socialIcons'>
                <Twitter className='main__icons'/>
                <LinkedIn className='main__icons'/>
                <Github className='main__icons'/>
            </div>

            <div className='main__buttons'>
                <p>Resume</p>
                <p>Contact</p>
            </div>

        </div>

        <div className='main__rightSection'>
            <img src={ProfilePic} alt='profile'></img>

        </div>
        



    </div>
  )
}

export default Main