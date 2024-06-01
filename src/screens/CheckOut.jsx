import { Container } from "react-bootstrap";
import Header from '../component/Header';
import Footer from '../component/Footer';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { Form, FormGroup, FormControl } from 'react-bootstrap';


const Checkout = () => {
    return (
        <>
            <Header></Header>
            <Container className="py-4 px-lg-5">
                <div className="row px-lg-5 mx-lg-5">
                    <div className="col-md-7">
                        <Form>
                            <h4 className="pb-2">Enter your name and address:</h4>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="text" placeholder="Name*" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="text" placeholder="Address*" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="text" placeholder="City*" />
                            </FormGroup>
                            <h4 className="pb-2">What's your contact information? </h4>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="email" placeholder="Email*" />
                            </FormGroup>
                            <FormGroup className="my-3">
                                <FormControl className="p-3" type="text" placeholder="Phone Number*" />
                            </FormGroup>
                            <h4 className="pb-2">How would you like to pay? </h4>
                            <div className="">
                                 <div className="border border-secondary-subtle rounded p-4 my-2">Momo</div>
                                 <div className="border border-secondary-subtle rounded p-4 my-2">Credit or Debit Card</div>
                                 <div className="border border-secondary-subtle rounded p-4 my-2">Paypal</div>
                            </div>

                            <Row className="justify-content-center">
                                <Col md={8}>
                                    <Button type="submit" className="col-sm-12 col-md-6 my-4 py-2" variant="dark" style={{ borderRadius: '50px', width: '100%' }}>Continue</Button>
                                </Col>
                            </Row>
                        </Form>
                    </div>
                    <div className="col-md-5 bg-succe px-5">
                        <div className="">
                            <h3>Summary</h3>
                            <div className="p-2">
                                <div className="d-flex justify-content-between">
                                    <span>Subtotal</span>
                                    <span>4,999,000</span>
                                </div>
                                <div className="d-flex justify-content-between py-2">
                                    <span>Delivery/Shipping</span>
                                    <span>Free</span>
                                </div>

                                <hr />
                                <div className="d-flex justify-content-between py-2">
                                    <span>Total</span>
                                    <span>4,999,000</span>
                                </div>
                                <hr />
                            </div>
                        </div>

                        <div className="">
                            <h4>List Items</h4>
                            <Row className="">
                                {Array.from({ length: 4 }).map((_, idx) => (
                                    <Col key={idx} className="py-2" sm={12}>
                                        <Row>
                                            <Col md={6} sm={12}>
                                                <Image fluid src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/428611ed-169d-483d-9872-86165159213e/nike-just-do-it.jpg"></Image>
                                            </Col>
                                            <Col md={6} sm={12} className="">
                                                <div>
                                                    <h5>Nike Zoom Fly 5</h5>
                                                    <span>Men's Shoes</span><br />
                                                    <div className="py-2">
                                                        <span>Size: </span> <span>40</span> <br />
                                                        <span>Quaylity: </span> <span>1</span>
                                                    </div>

                                                </div>
                                                <div>
                                                    <h5>4,999,000</h5>
                                                </div>
                                            </Col>

                                        </Row>
                                        <hr />
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </>
    )
}
export default Checkout;