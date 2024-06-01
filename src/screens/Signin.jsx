import { Container } from "react-bootstrap";
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const Signin = () => {
    return (
        <>
            <Container style={{ marginTop: '100px' }}>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-sm-12">
                        <h3>Enter your email and password to Join Website</h3>
                        <Form>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="email" placeholder="Email*" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="password" placeholder="Password*" />
                            </FormGroup>
                            <p>
                                By continuing, I agree to Privacy Policy and Terms of Use.
                            </p>
                            <div className="d-flex justify-content-between">
                                <a className="link-dark link-offset-3-hover link-underline-none" href="">Back to Website</a>
                                <Button type="submit" className="px-5 my-2 py-2" variant="dark" style={{ borderRadius: '50px' }}>Sign In</Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Signin;