import React from 'react'
import './Skills.css'
import {ReactComponent as ReactIcon} from '../../assets/react.svg' 
import {ReactComponent as JavaScriptIcon} from '../../assets/javascript.svg' 
import {ReactComponent as Html5} from '../../assets/html5.svg' 
import {ReactComponent as Css3} from '../../assets/css3.svg' 
import {ReactComponent as VsCode} from '../../assets/vscode.svg' 
import {ReactComponent as GitHub} from '../../assets/github.svg' 
import Figma from '../../assets/figma.png'





function Skills() {
  return (
    <div className='skills' id='skills'>
      <h1 className='skills__title'>Professional Skillset</h1>
          
      <div className='skills__icons'>
        <Html5 className='skills__html5'/>
        <Css3 className='skills__css3'/>
        <JavaScriptIcon className='skills__javaScriptIcon'/>
        <ReactIcon className='skills__reactIcon'/>       
      </div>

      <h1 className='skills__title'>Tools I Use</h1>
      <div className='skills__icons'>
        <img src={Figma} className='skills__figma' alt='Figma'/>
        <VsCode className='skills__vscode' />
        <GitHub className='skills__github' />
      </div>
      
    </div>
  )
}

export default Skills