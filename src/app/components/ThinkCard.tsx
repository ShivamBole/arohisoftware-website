import React from 'react'
import Image from 'next/image';
import CareerComponent from '../components/CareersComponent';
import Footer from './Footer';

import './ThinkCard.css'

interface ThinkCardProps {
    images: string,
    altText: string,
    title: string,
    text: string
}

const ThinkCard: React.FC<ThinkCardProps> = ({ images, altText, title, text }) => {
  return (
 <div>
     <div className='box'>
      <Image src={`${images}`} alt={altText} width={500} height={300} />
      <div className='second-div'>
        <h1></h1>
        <p>{title}</p>
      </div>
      <div className='overlay'>
        <h2>{text}</h2>
      </div>

    
      
    </div>
    
 </div>
  )
}

export default ThinkCard
