import React from 'react'
// MBA colleges image
import './image/jaipuria-noida.png';
import './image/jaipuria-indore.jpeg';
import './image/jaipuria-lucknow.png';
import './image/jaipuria-jaipur.png';
import './image/jaipuria-ghaziabad.jfif';
// School image
import './image/jaipuria-school-amethi.jpg';
import './image/jaipuria-school-baharaich.jpg';
import './image/jaipuria-school-banaras-parao.jpg';
import './image/jaipuria-school-faizabad.jpg';
import './image/jaipuria-school-gonda.png';
import './image/jaipuria-school-lucknow.jpg';
import './image/jaipuria-school-satna.jpg';
import './image/jaipuria-school-shikohabad.jpg';


export const Educationist = () => {
  return (
     <div>
    <h3 className='education'>Institutions</h3>
    <div>
    <div>
      <h1 className='text'>MBA Colleges</h1>
    <div className='flex2'>
      <div>
        <a href="https://jaipuriamba.edu.in/">
        <img src={ require("./image/jaipuria-ghaziabad.jfif") } alt="JAIPURIA-GHAZIABAD" height={300} width={200} /></a>
        <h4 className='txt'>Jaipuria Ghaziabad</h4>
      </div>
    </div>
    </div>
    <div>
      <h1 className='text'>Schools</h1>
      <div className='flex2'>
        <div>
         <a href="https://jaipuriaschoolsamethi.com/"> <img src={ require("./image/jaipuria-school-amethi.jpg") } alt="JAIPURIA-SCHOOL-AMETHI" height={200} width={200} /></a>
        <h4 className='txt'>Jaipuria School Amethi</h4> 
        </div>
        <div>
        <a href="https://www.jaipuriaschoolbahraich.in/"><img src={ require("./image/jaipuria-school-baharaich.jpg") } alt="JAIPURIA-SCHOOL-BAHARAICH" height={200} width={200} /></a>
        <h4 className='txt'>Jaipuria School Baharaich</h4> 
        </div>
        <div>
        <a href="https://www.jaipuriaschoolsbanaras.in/parao/"><img src={ require("./image/jaipuria-school-banaras-parao.jpg") } alt="JAIPURIA-SCHOOL-BANARAS-PARAO" height={200} width={200} /></a>
        <h4 className='txt'>Jaipuria School Banaras Parao</h4>
        </div>
        <div>
       <a href="https://jaipuriaschoolfaizabad.com/"> <img src={ require("./image/jaipuria-school-faizabad.jpg") } alt="JAIPURIA-SCHOOL-FAIZABAD" height={200} width={200} /></a>
        <h4 className='txt'>Jaipuria School Faizabad</h4>
        </div>
      </div>
      <div className='flex2'>
        <div>
       <a href="https://www.jaipuriaschoolgonda.in/"> <img src={ require("./image/jaipuria-school-gonda.png") } alt="JAIPURIA-SCHOOL-GONDA" height={200} width={200} /></a>
        <h4 className='txt'>Jaipuria School Gonda</h4>
        </div>
        <div>
       <a href="https://www.sethmrjaipuria.school/"> <img src={ require("./image/jaipuria-school-lucknow.jpg") } alt="JAIPURIA-SCHOOL-LUCKNOW" height={200} width={200} /></a>
        <h4 className='txt'>Jaipuria School Lucknow</h4>
        </div>
        <div>
        <a href="https://jaipuriaschoolssatna.com/index/"><img src={ require("./image/jaipuria-school-satna.jpg") } alt="JAIPURIA-SCHOOL-SATNA" height={200} width={200} /></a>
        <h4 className='txt'>Jaipuria School Satna</h4>
        </div>
        <div>
        <a href="https://www.jaipuriaschoolshikohabad.in/"><img src={ require("./image/jaipuria-school-shikohabad.jpg") } alt="JAIPURIA-SCHOOL-SHIKOHABAD" height={200} width={200} /></a>
        <h4 className='txt'>Jaipuria School Shikohabad</h4>
        </div>
      </div>
    </div>
    </div>
    </div>
  )
}
export default Educationist;
