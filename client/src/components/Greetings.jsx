import React from 'react'
import '../css/greetings.css'
import carousel_img from '../img/testimonial.jpg'
import { Carousel } from 'react-bootstrap'
import ScrollableAnchor from 'react-scrollable-anchor'

export default (props) => {
  const greetings = props.greetings
  // const greetings = ['1', '2']
  const greeetingsElements = greetings.map((greeting, index) => {
    return <Carousel.Item key={index}>
      <div className='testimonial'>
        {/* <img alt="900x500" src={carousel_img} className='testimonial-avatar' /> */}
        <Carousel.Caption className='testimonial-quote'>
          <div className="text-right">            
            <p className="message">{greeting.content}
              {/* <br />
              {greeting.name} */}
            </p>
          </div>
        </Carousel.Caption>
      </div>
    </Carousel.Item>
  })

  return (
    <ScrollableAnchor id={'greetings-scroll'}>
      <div id='greetings'>
        <h1>Greetings</h1>
        <Carousel className='container'>
          {greeetingsElements}
        </Carousel>
      </div>
    </ScrollableAnchor>);


} 