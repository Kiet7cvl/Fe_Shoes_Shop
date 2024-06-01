import { Container, Row, Col } from "react-bootstrap";
const Footer = () => {
    return (
        <Container fluid className="bg-dark h-600">
            <Container>
                
            </Container>
            <Container>
                <Row className="pt-4">
                    <Col md={9}>
                        <Row>
                            <Col md={3} sm={12}>
                                <p className="text-light">Find A Store</p>
                                <p className="text-light">Becomce a member</p>
                                <p className="text-light">Send us Feedback</p>
                            </Col>
                            <Col md={3} sm={12}>
                                <p className="text-light">Get Help</p>
                                <p className="text-secondary">Order Status</p>
                                <p className="text-secondary">Payment Options</p>
                            </Col>
                            <Col md={3} sm={12}>
                                <p className="text-light">About</p>
                                <p className="text-secondary">News</p>
                                <p className="text-secondary">Purposes</p>
                            </Col>
                            <Col md={3} sm={12}>
                                <p className="text-light">Discounts</p>
                                <p className="text-secondary">Student</p>
                                <p className="text-secondary">Teacher</p>
                            </Col>
                        </Row>
                    </Col>

                    <Col md={3} sm={12} className="text-md-end text-start">
                        <i className="fa-brands fa-facebook text-light fs-2 px-2"></i>
                        <i className="fa-brands fa-twitter text-light fs-2 px-2"></i>
                        <i className="fa-brands fa-youtube text-light fs-2 px-2"></i>
                        <i className="fa-brands fa-instagram text-light fs-2 px-2"></i>
                    </Col>
                </Row>
                <Row>
                 <Col className="py-2">
                 <i className="fa-solid fa-location-dot text-light pe-3"></i> 
                      <span className="text-light pe-4">Viet Nam</span>
                      <span className="text-secondary">@2023, Inc. All Rights Revered</span>
                 </Col>
                </Row>
            </Container>
        </Container>
    )
}

export default Footer;