import React from 'react';
import {Navbar, Header} from './'

const Hero = () => {
  return (
    <>
    <div className='bg-[url(../style/image-hero.jpg)] bg-no-repeat bg-cover w-full h-auto pb-20'>
      <Navbar/>
      <Header/>
    </div>
    </>
  )
}

export default Hero;