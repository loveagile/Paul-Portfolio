import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className='quote-card-view'>
      <Card.Body>
        <blockquote className='blockquote mb-0'>
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className='purple'>Paul Landry </span>
            from <span className='purple'> Canada.</span>
            <br />I am a Bachelor of Computer Science in Toronto University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className='about-activity'>
              <ImPointRight /> Playing Basketball
            </li>
            <li className='about-activity'>
              <ImPointRight /> Making Friends
            </li>
            <li className='about-activity'>
              <ImPointRight /> Playing Games
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
