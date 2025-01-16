import React from 'react'
import '../App.css'
import { TiPlus } from "react-icons/ti";
import { FaMinus } from "react-icons/fa6";

import { useDispatch, useSelector } from 'react-redux';
import { additem, delCart } from '../Redux/action/action';
import { Link } from 'react-router-dom';
export default function Cart() {
  const state = useSelector(state => state)
  const manyShoping=state.length>0?30:0
  const dispatch = useDispatch()
  console.log(state)

  function additems(ItemS) {
    dispatch(additem(ItemS));
  };
  function delitems(ItemS) {
    dispatch(delCart(ItemS));
  };
const totalproject=state.reduce((acc,item)=>{
  acc+=item.price * item.num;
  return acc
},manyShoping)
const lengthitem=state.reduce((acc,item)=>{
  acc+= item.num;
  return acc
},0)

  return (
    <div className='pt-3 mt-5'>

      <div className='d-flex justify-content-around px-5 mt-5'>
        <div className="itemLiast border border-dark col-7 ">
          <h5 className='headers'>Item List </h5>
          <div className="items px-3 ">
            {state.map((item) => {
              return (
                <div className="itempro d-flex justify-content-around pt-3" key={item.id}>
                  <div className="col-3">
                    <img src={item.image} className="imagCart" alt="" />
                  </div>
                  <div className="col-3">
                    <p className='textdes'>{item.description}</p>
                  </div>
                  <div className=" col-3 itemText">
                    <div className=" d-flex justify-content-around fs-4">
                      <span onClick={()=>delitems(item)}><FaMinus /></span>
                      <span>{item.num}</span>
                      <span onClick={()=>{additems(item)}}><TiPlus /></span>
                    </div>
                    <div className=" pt-2">
                      <h4 className='text-center'>{item.num} x {item.price}</h4>
                    </div>

                  </div>
                  <h1 className=' '> </h1>
                </div>
              )
            })}
          </div>
        </div>

        <div className=" Order col-4 ">
          <h5 className='headers  border border-dark mb-0'>Order Summary</h5>
          <div className="order  border border-dark px-4 pt-2">
            <div className="d-flex justify-content-between fs-4">
              <p>Products</p>
              <h2>{lengthitem}</h2>
             
            </div>
            <div className="d-flex justify-content-between fs-4">
              <p>Shipping</p>
              <h2>{manyShoping}$</h2>
            </div>
            <div className="d-flex justify-content-between">
              <h4>Total amomunt</h4>
              <h2> {Math.round(totalproject)}$</h2>
            </div>
            <div className="d-flex justify-content-between mt-4">
            <Link to={"/Checkout"} className='col-9 btn btn-dark mx-auto'>Go to Checkout </Link>
            </div>

          </div>
          \
        </div>
      </div>


      {/*  */}


    </div>
  )
}
