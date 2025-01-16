import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MdStarHalf } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/action/action';
import Marquee from "react-fast-marquee";
export default function Productspage() {
    const params = useParams()
    const [data, setdata] = useState([])
    const dispatch = useDispatch()
    const [dataprodacy, setdataprodacy] = useState([])

console.log(dataprodacy)
    function addProduct(product) {
        dispatch(addCart(product));
    };

    useEffect(() => {
        const api = `https://fakestoreapi.com/products/`;
        fetch(api).then((res) => res.json()).then((datas) =>{  setdataprodacy(datas)})
        fetch(`${api}${params.id}`).then((res) => res.json()).then((datas) => setdata(datas))



    }, []);
    return (

        <div>
            <div>
                <div className="px-5 pt-5 ">
                    <div className="row ">
                        <div className=" PX-5 pt-5 d-flex justify-content-around " key={data.id}>
                            <div className=" col-4 px pt-5">
                                <img src={data.image} className="card-img-top  imgCard" alt="..." />
                            </div>
                            <div className=" pt-5 px-5">
                                <h2 className="">{data.title}$</h2>
                                <h2 className="">{data.category}$</h2>
                                <h2 className=""><MdStarHalf /></h2>
                                <h2 className="">{data.price}$</h2>
                                <p className=" fs-4 ">{data.description}</p>
                                <div className=" mt-3 px-5 ">
                                    <button className="btn btn-dark ms-4">Buy Now</button>
                                    <button className="btn btn-dark ms-4" onClick={() => addProduct(data)} >Add to Cart</button>
                                </div>

                            </div>
                        </div>
                      
                    </div>
                    <div className="row mt-5 mb-5">
                    <Marquee Required >
                    {dataprodacy.map((item) => {
                        return (
                        <div className='cpl-4 border border-dark  pt-2 itemcardes'>
                            <div style={{height: "60%",maxWidth: "100%", }}>
                                <img style={{ width: "100%", height: "100%" }} src={item.image} alt=""  className='card-img-top '/>
                            </div>
                            <h2 className='text-center texttitle mt-2'>{item.title}</h2>
                            <div className="buttonCard d-flex justify-content-around mt-1">
                                <button className="btn btn-primary" >Buy Now</button>
                                <button className="btn btn-primary" onClick={() => addProduct(item)}>Add to Cart</button>
                            </div>
                        </div>
                )
            })}
              </Marquee>
                    </div>

                </div>


            </div>
        </div>
    )
}
