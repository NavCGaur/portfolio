import React from 'react'
import './Projects.css'
import {ReactComponent as GitHub} from '../../assets/github.svg'
import projectsData from './data'


function Projects() {


  return (<div className='projects' id='projects'>
            <h1 className='projects__title'>Projects</h1>

            {projectsData.map((project,idx)=><>
            <h1 className='projects__title'>{project.projectTitle}</h1>

            <div className='projects__container'>
                <div className='projects__shadowbox'></div>
                <div className='projects__leftSection'>
                    <a href={project.appLink} alt='app' target='_blank'>
                    <img src={project.image} className='projects__image' alt='project' />
                    </a>
                </div>
                <div className='projects__rightSection'>
                    <p>Personal Project</p>
                    <h1>{project.projectTitle}</h1>
                    <p>{project.aboutProject}</p>

                    <div className='projects__links'>
                        <a href={project.codeLink} alt='code' target='_blank'><GitHub className='projects__githubIcon'/></a>
                        <a href={project.appLink} alt='app' target='_blank' >Visit Project</a>
                    </div>

                </div>
            </div>        </>
            )}
         </div>


  )
}

export default Projects