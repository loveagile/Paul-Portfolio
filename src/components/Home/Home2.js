import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import myImg from '../../Assets/avatar.png'
import Tilt from 'react-parallax-tilt'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'

function Home2() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <Row>
          <Col md={8} className='home-about-description'>
            <h1 style={{ fontSize: '2.6em' }}>
              Let me <span className='purple'> INTRODUCE </span> myself
            </h1>
            <p className='home-about-body'>
              I am a seasoned senior{' '}
              <span className='purple'>Full stack developer</span> with over 7
              years of experience.
              <br />
              <br />
              My primary focus is on developing user-friendly interfaces
              <br />
              and I possess a broad range of technical proficiencies in
              languages such as
              <i>
                <b className='purple'>
                  {' '}
                  JavaScript, TypeScript, PHP and Python.{' '}
                </b>
              </i>
              <br />
              as well as frameworks such as{' '}
              <b className='purple'>
                React, NodeJS, Next.js, Laravel, and Django
              </b>
              .
              <br />
              <br />I have an exceptional ability to integrate various
              development tools and frameworks into projects to deliver
              exceptional results.
            </p>
          </Col>
          <Col md={4} className='myAvtar'>
            <Tilt>
              <img src={myImg} className='img-fluid' alt='avatar' />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className='home-about-social'>
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className='purple'>connect </span>with me
            </p>
            <ul className='home-about-social-links'>
              <li className='social-icons'>
                <a
                  href='https://github.com/loveagile'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://twitter.com/loveagile'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.linkedin.com/in/loveagile/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className='social-icons'>
                <a
                  href='https://www.instagram.com/loveagile'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  )
}
export default Home2
