import { Col, Container, Row } from "react-bootstrap";
import { Form, FormGroup, FormControl, Button } from 'react-bootstrap';

const Signup = () => {
    return (
        <>
            <Container style={{ marginTop: '50px' }}>
                <div className="row justify-content-center pb-5">
                    <div className="col-md-6 col-sm-12">
                        <h3 className="pb-2">Now let's make you become a Shop Member</h3>
                        <Form>
                            <Row>
                                <Col>
                                    <Form.Control className="p-3" placeholder="First name*" />
                                </Col>
                                <Col>
                                    <Form.Control className="p-3" placeholder="Last name*" />
                                </Col>
                            </Row>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="email" placeholder="Email*" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="password" placeholder="Password*" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="password" placeholder="Re-Password*" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="text" placeholder="Address*" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="number" placeholder="Phone Contact*" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="date" placeholder="Phone Contact*" />
                            </FormGroup>
                            <Form.Group as={Row} className="mb-3">
                                <Form.Label as="legend" column sm={2} className="">
                                    Gender:
                                </Form.Label>
                                <Col sm={5} className="mt-2">
                                    <Form.Check
                                        type="radio"
                                        label="Male"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios1"
                                    />
                                </Col>
                                <Col sm={5} className="mt-2">
                                    <Form.Check
                                        type="radio"
                                        label="FeMale"
                                        name="formHorizontalRadios"
                                        id="formHorizontalRadios2"
                                    />
                                </Col>
                            </Form.Group>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="Sign up for emails to get updates from Shop on products, offers and your Member benefits." />
                            </Form.Group>

                            <Form.Group className="mb-3" id="formGridCheckbox">
                                <Form.Check type="checkbox" label="I agree to Privacy Policy and Terms of Use." />
                            </Form.Group>

                            <Row className="justify-content-between">
                                <Col sm={12} md={6}>
                                    <a className="link-dark link-offset-3-hover link-underline-none" href="">Back to Website</a>
                                </Col>
                                <Col sm={12} md={6}>
                                    <Button type="submit" className="col-sm-12 col-md-6 my-2 py-2" variant="dark" style={{ borderRadius: '50px', width: '100%' }}>Create Account</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                </div>
            </Container>
        </>
    )
}
export default Signup;