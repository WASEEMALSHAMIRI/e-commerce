import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Contact() {
    return (
        <div>
            <Container className='mt-5 pt-5'>
                <h1 className='border  border-0 border-bottom-4 border-dark me-2 text-center'> Contact Us </h1>
                <h1 className='border border-dark me-2 col-12   ms-4'> </h1>
                <form className='mx-auto px-5' style={{ width: "70%" }}>
                    <Form className='text-start px-5  col-8'>
                        <Form.Group className="mb-53 " controlId="formBasicPassword">
                            <Form.Label className='mb-3'>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter Name" className='border border-dark me-2 mb-3 col-4' />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label className='mb-3' >Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className='border border-dark me-2 mb-3' />

                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className='mb-3'>Massage</Form.Label>
                            <textarea name="" id="" className='d-block col-4 px-3' style={{height:"100px"}}  placeholder="enter Massege"></textarea>
                        </Form.Group>
                        <div className='text-center'>

                            <Button className='text-center' variant="primary" type="submit">Send</Button>
                        </div>

                    </Form>
                </form>
            </Container>

        </div>
    )
}
