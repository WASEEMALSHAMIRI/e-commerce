import React from 'react'
import img1 from '../images/mens`s.jpeg'
import img2 from '../images/Women`s Clothing.jpg'
import img3 from '../images/Jewwlwry.jpeg'
import img4 from '../images/Electronics.jpg'
export default function About() {
  return (
    <div >
      <div className="">
        <p className='fs-3 px-5 pt-5 '>Welcome to the E-commerce store Our store is available and we have all kinds of products Our company is a
          distinguished company in the field of e-commerce in terms of credibility, speed
          of delivery and safe payment methods Our store is characterized by ease of shopping, many items, competitive,
          cheap and varied prices, good customer service and quick response to your inquiries and questions
          We receive all kinds of questions and work to solve them as soon as possible We also receive all your opinions and
          suggestions and work to enhance and develop our sites permanently We aspire to be among the best In the field of
          online shopping, our products are original from the best international brands. We do not display any product in
          our store unless we verify its authenticity and quality, and the description matches the product exactly. The prices
          are very reasonable and appropriate.
        </p>
      </div>
      <div className="d-flex justify-content-around mt-5">

        <div className=" col-2 border border-dark">
          <div className="w-100" style={{height:'230px'}}>
            <img src={img1} alt=""  style={{width:"100%", height:'100%'}}/>
          </div>
          <h2 className='text-center'> Mens`s Clothing</h2>
        </div> 

        
        <div className=" col-2 border border-dark">
          <div className="w-100 style={{height:'230px'}}">
            <img src={img2} alt=""  style={{width:"100%", height:'100%'}}/>
          </div>
          <h2 className='text-center'>Women`s Clothing</h2>
        </div> 

        
        <div className=" col-2 border border-dark">
          <div className="w-100" style={{height:'230px'}}>
            <img src={img3} alt=""  style={{width:"100%", height:'100%'}}/>
          </div>
          <h2 className='text-center'>Jewwlwry </h2>
        </div> 

        
        <div className=" col-2 border border-dark">
          <div className="w-100 " style={{height:'230px'}}>
            <img src={img4} alt=""  style={{width:"100%", height:'100%'}}/>
          </div>
          <h2 className='text-center'>Electronics</h2>
        </div> 


      </div>
    </div>


  )
}

