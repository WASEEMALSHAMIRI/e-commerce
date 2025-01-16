import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addCart } from '../Redux/action/action';
export default function Products() {
    const [data, setdata] = useState([])
    const [datafelter, setdatafelter] = useState([])
    const api = "https://fakestoreapi.com/products/";
    const dispatch = useDispatch()

    useEffect(() => {

        fetch(api).then((res) => res.json()).then((datas) => { setdata(datas); setdatafelter(datas) })

    }, []);

    function addProduct(product) {
        dispatch(addCart(product));
    };
    function mensclothing() {
        return data.filter((item) => item.category === "men's clothing")
    }
    function jewelery() {
        return data.filter((item) => item.category === "jewelery")
    }
    function electronics() {
        return data.filter((item) => item.category === "electronics")
    }
    function womensclothing() {
        return data.filter((item) => item.category === "women's clothing")
    }
    function ALL() {
        return data.filter((item) => item.category !== 0)
    }
    return (
        <div>
            <div className=" col-5 d-flex justify-content-around mx-auto mt-5 mb-5 ">
                <button onClick={() => setdatafelter(ALL())} className='btn btn-dark'>ALL</button>
                <button onClick={() => setdatafelter(electronics())} className='btn btn-dark'>electronics</button>
                <button onClick={() => setdatafelter(jewelery())} className='btn btn-dark'>jewelery</button>
                <button onClick={() => setdatafelter(mensclothing())} className='btn btn-dark'>Mensclothing</button>
                <button onClick={() => setdatafelter(womensclothing())} className='btn btn-dark'>Womensclothing</button>
            </div>
            <div className="px-5 ">
                <div className="row d-flex justify-content-around">
                    {datafelter.map((item) => {
                        return (

                            <div className=" col-4 carditem    mb-3   " key={item.id}>

                                <div className=" border border-dark card pt-3" style={{ width: "100%", height: "670px" }}>
                                    <Link className='links' to={`/Products/${item.id}`}>
                                        <img src={item.image} className="card-img-top  imgCard" alt="..." />
                                    </Link>
                                    <div className="card-body">item
                                        <h5 className="card-title">{item.title}</h5>
                                        <p className="card-text textdes">{item.description}</p>
                                        <h2 className="card-title text-center border border-dark mb-4">{item.price}$</h2>
                                        <div className="buttonCard d-flex justify-content-around mt-3">
                                            <button className="btn btn-primary" >Buy Now</button>
                                            <button className="btn btn-primary" onClick={() => addProduct(item)}>Add to Cart</button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}
