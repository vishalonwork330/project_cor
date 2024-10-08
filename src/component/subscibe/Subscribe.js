import React from 'react'
import './Subscribe.css'
import '../../index.css'
import MaskSub from '../../img/Mask.svg'
import Play from '../../img/play.png'

const Subscribe = () => {
  return (
    <section className='subs-container'>
      <div className='subsInner-box'>
        <div className='single-subsSet'>
          <h2>Subscribe</h2>
          <p className='para'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <div className='subs-detailBox'>
            <div className='inputBox'>
              <input type="text" placeholder="Enter your email" />
            </div>
            <div className='subs-submitBtn'>
              Subscribe Now
              <span><img src={Play} alt="Play icon" /></span>
            </div>
          </div>
        </div>
        <div className='single-subsSet imgSet-sub' style= {{paddingLeft: "40px"}} >
          <img src={MaskSub} alt="Mask illustration" className='subs-img'/>
        </div>
      </div>
    </section>
  )
}

export default Subscribe
