import React from 'react'
import { Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Login() {
    return (
        <div>
            <Container className='mt-5 pt-5'>
                <h1 className='border  border-0 border-bottom-4 border-dark me-2 text-center'> Login </h1>
                <h1 className='border border-dark me-2'> </h1>
                <form className='mx-auto px-4' style={{ width: "70%" }}>
                    <Form className='text-start '>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label >Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" className='border border-dark me-2' />

                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password" className='border border-dark me-2' />
                        </Form.Group>
                        <h5>New Here ?<a href="/Register">Register</a></h5>
                        <div className='text-center'>
                            
                            <Button className='text-center' variant="primary" type="submit">Submit</Button>
                        </div>

                    </Form>
                </form>
            </Container>
        </div>
    )
}
