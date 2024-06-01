import { Container } from "react-bootstrap";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import MyOwlCarousel from "../component/MyOwlCarousel";
import Header from '../component/Header';
import Footer from '../component/Footer';

const Cart = () => {
    return (
        <>
            <div>
                <Header></Header>
                <Container fluid className="py-4 px-lg-5">
                    <div className="row px-lg-5 mx-lg-5 ">
                        <div className="col-md-7">
                            <h4>Bag</h4>
                            <Row className="">
                                {Array.from({ length: 4 }).map((_, idx) => (
                                    <Col key={idx} className="py-2" sm={12}>
                                        <Row>
                                            <Col md={4} sm={12}>
                                                <Image fluid src="https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/428611ed-169d-483d-9872-86165159213e/nike-just-do-it.jpg"></Image>
                                            </Col>
                                            <Col md={8} sm={12} className="d-flex p-3 justify-content-between">
                                                <div>
                                                    <h5>Nike Zoom Fly 5</h5>
                                                    <span>Men's Shoes</span><br />
                                                    <span>Description</span><br />
                                                    <span>Color......</span><br />
                                                    <div className="py-2">
                                                        <span>Size</span>
                                                        <select name="" id="" className="mx-2 px-2">
                                                            {Array.from({ length: 10 }).map((_, idx) => (
                                                                <option key={idx} value={idx}>{idx}</option>

                                                            ))}
                                                        </select>

                                                        <span>Quaylity</span>
                                                        <select name="" id="" className="mx-2">
                                                            {Array.from({ length: 11 }).map((_, idx) => (
                                                                <option key={idx} value={idx}>{idx}</option>

                                                            ))}
                                                        </select>
                                                    </div>
                                                    <div className="py-2">
                                                        <Button variant="light"><i className="fa-regular fa-heart px-1"></i></Button>
                                                        <Button variant="light"><i className="fa-solid fa-trash-can"></i></Button>
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
                        <div className="col-md-5 px-md-5 ">
                            <div className="sticky-top">
                                <h5>Summary</h5>
                                <div className="p-2">
                                    <div className="d-flex justify-content-between">
                                        <span>Subtotal</span>
                                        <span>4,999,000</span>
                                    </div>
                                    <div className="d-flex justify-content-between py-2">
                                        <span>Estimated Delivery & Handling</span>
                                        <span>Free</span>
                                    </div>

                                    <hr />
                                    <div className="d-flex justify-content-between py-2">
                                        <span>Total</span>
                                        <span>4,999,000</span>
                                    </div>
                                    <hr />

                                </div>
                                <div className="py-3 row px-3">
                                    <Button className="p-3 my-2" variant="dark" style={{ borderRadius: '50px' }}>Guest CheckOut</Button>
                                    <Button className="p-3" variant="dark" style={{ borderRadius: '50px' }}>Member CheckOut <i className="fa-regular fa-heart px-1"></i></Button>
                                </div>
                            </div>


                        </div>
                    </div>

                    <div className='pb-4'>
                        <h4 className='text-start py-4'>You Might Also Like</h4>
                        <MyOwlCarousel></MyOwlCarousel>

                    </div>
                </Container>
                <Footer></Footer>
            </div>
        </>
    );
}

export default Cart;