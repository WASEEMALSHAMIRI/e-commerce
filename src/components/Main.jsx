import React from 'react'
import log from "../images/logo512.png"
// import { Container } from 'react-bootstrap'
export default function Main() {
    return (

        <div style={{ width: "99%", height: "90vh", }} className='mx-auto bg-dark mt-1 mb-5'>
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active ">
                        <img style={{ width: "100%", height: "90vh" }} src={log} className=" " alt="..." />
                        <div style={{ top: "0", left:"0",backgroundColor: "rgba(53, 57, 58, 0.53)", width: "100%", height: "100%"}} className="carousel-caption  d-md-block  text-start pt-5 px-5">
                            <h5 style={{marginTop:'200px'}}>Welcome to our store</h5>
                            <p>Welcome to our store Discover awide range of high-quality products at competive prices,all in one  place. Enjoy a seamless
                                ahopping experience with fast delivery and exclusive deals
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
