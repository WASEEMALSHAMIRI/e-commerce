import React from 'react'
import '../App.css'

import { useSelector } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
export default function Checkout() {
  const state = useSelector(state => state)
  const manyShoping = state.length > 0 ? 30 : 0

  const totalproject = state.reduce((acc, item) => {
    acc += item.price * item.num;
    return acc
  }, manyShoping)
  const lengthitem = state.reduce((acc, item) => {
    acc += item.num;
    return acc
  }, 0)
  return (
    <div>
      <div className='pt-3 mt-5 mb-5'>

        <div className='d-flex justify-content-around px-5 mt-5'>
          <div className="itemLiast border border-dark col-7 ">
            <h5 className='headers'>Billing address</h5>
            <div className="items px-3 pt5 ">
              <Form className='px-5' >
                <Form.Group className="mb-3 mt-3" controlId="formGroupPassword">
                  <Row>
                    <Col>
                    <Form.Label>First name</Form.Label>
                      <Form.Control className='border border-dark' placeholder="First name" />
                    </Col>
                    <Col>
                    <Form.Label>Last name</Form.Label>
                      <Form.Control className='border border-dark' placeholder="Last name" />
                    </Col>
                  </Row>
                </Form.Group>
                <Form.Group className="mb-3 mt-2" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control className='border border-dark' type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3 mt-2" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control className='border border-dark' placeholder="1234 Main St" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGridAddress2">
                  <Form.Label>Address 2</Form.Label>
                  <Form.Control className='border border-dark' placeholder="Apartment, studio, or floor" />
                </Form.Group>

                <Row className="mb-3">
                  <Form.Group as={Col} controlId="formGridCity">
                    <Form.Label>City</Form.Label>
                    <Form.Control className='border border-dark' />
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridState">
                    <Form.Label>State</Form.Label>
                    <Form.Select className='border border-dark' defaultValue="Choose...">
                      <option>Choose...</option>
                      <option>...</option>
                    </Form.Select>
                  </Form.Group>

                  <Form.Group as={Col} controlId="formGridZip">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control className='border border-dark' />
                  </Form.Group>
                </Row>

                <Form.Group className="mb-3 mt-3" id="formGridCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <h1 className='border border-dark me-2 '> </h1>
                  <h1 className='mt-4 mb-4'>Payment</h1>
                  <Row>
                    <Col>
                    <Form.Label>First on Cardd</Form.Label>
                      <Form.Control className='border border-dark' />
                    </Col>
                    <Col>
                    <Form.Label>Cardit Card number</Form.Label>
                      <Form.Control className='border border-dark' />
                    </Col>
                  </Row>
                  <Row className='mt-3 mb-5'>
                    <Col className='col-3'>
                    <Form.Label>Expiration</Form.Label>
                      <Form.Control className='border border-dark ' style={{width:"200px"}} />
                    </Col>
                    <Col>
                    <Form.Label>CVV</Form.Label>
                      <Form.Control className='border border-dark'  style={{width:"120px"}} />
                    </Col>
                  </Row>
                  <h1 className='border border-dark me-2 '> </h1>
                  <div className=" text-center mt-5">
                  <Button className='col-6 mb-5 mx-auto ' variant="primary" type="submit">
                  Submit
                </Button>
                  </div>

              </Form>
            </div>
          </div>

          <div className=" Order col-4 ">
            <h5 className='headers  border border-dark mb-0'>Order Summary</h5>
            <div className="order  border border-dark px-4 pt-4">
              <div className="d-flex justify-content-between fs-3">
                <p>Products</p>
                <h2>{lengthitem}</h2>

              </div>
              <div className="d-flex justify-content-between fs-3">
                <p>Shipping</p>
                <h2>{manyShoping}$</h2>
              </div>
              <div className="d-flex justify-content-between">
                <h4>Total amomunt</h4>
                <h2> {Math.round(totalproject)}$</h2>
              </div>
              <div className="d-flex justify-content-between mt-4">
              </div>

            </div>
            \
          </div>
        </div>


        {/*  */}


      </div>
    </div>
  )
}
