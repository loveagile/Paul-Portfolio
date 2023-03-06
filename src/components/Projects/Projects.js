import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import alert from '../../Assets/Projects/alert.png'
import adit from '../../Assets/Projects/adit.png'
import samlabs from '../../Assets/Projects/samlabs.png'
import italiameravigliosaintour from '../../Assets/Projects/italiameravigliosaintour.png'

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Particle />
      <Container>
        <h1 className='project-heading'>
          My Recent <strong className='purple'>Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={samlabs}
              isBlog={false}
              title='Samlabs'
              description='SAM Labs is a one-of-a-kind STEAM education and coding resource for classrooms, after school clubs, makerspaces, learning labs and so much more!. It was built with React, WordPress, PHP, MySQL'
              ghLink='https://github.com/loveagile/samlabs'
              demoLink='https://samlabs.com/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={italiameravigliosaintour}
              isBlog={false}
              title='Italia meravigliosa in tour'
              description='Italia Meravigliosa offers the opportunity to collaborate with our editorial staff if you are a photographer, a videomaker or a travel blogger. It was built by React, Next.js, Tailwind CSS and Node.js.'
              ghLink='https://github.com/loveagile/itali-meravigliosa-in-tour'
              demoLink='https://www.italiameravigliosaintour.it/'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={alert}
              isBlog={false}
              title='Public Figures News. Career, Wealth And Death'
              description='Read about death of influences, politicians, rappers and other public figures. Career, net worth and death. I used React, Next.js, Express, Tailwind CSS, Prisma and PostgreSQL'
              ghLink='https://github.com/loveagile/alert-nextjs'
              demoLink='https://alert.rip/'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
