import Dropdown from 'react-bootstrap/Dropdown';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Header from '../component/Header';
import Footer from '../component/Footer';

const ListProduct = () => {
    return (
        <>
            <Header></Header>
            <Container fluid>
                <div className='px-lg-5 pt-2 pb-5' >
                    <div className="d-flex justify-content-between py-2 sticky-top bg-white">
                        <h3>Shoes (..)</h3>
                        <div className='d-flex'>
                            <div className='mt-2'>
                                <span className=''>Show Hide</span>
                                <i className="ps-2 pe-4 fa-solid fa-list"></i>
                            </div>
                            <Dropdown>
                                <Dropdown.Toggle variant="" id="dropdown-basic">
                                    Sort By
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    <Dropdown.Item href="#/action-1">1</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">2</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">3</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>

                    <div className='row'>
                        <div className='d-none d-md-block col-md-2 col-sm-12 '>
                            <div className='position-sticky-1'>
                                <ul className='list-group'>
                                    <li>Lifestyle</li>
                                    <li>Running</li>
                                    <li>Football</li>
                                    <li>Jordan</li>
                                    <li>Athletics</li>
                                    <li>Walking</li>
                                </ul>
                                <hr />
                                <h5>Gender</h5>
                                <ul className='list-group'>
                                    <li>
                                        <input type="checkbox" className="" id="" /> Men
                                    </li>
                                    <li>
                                        <input type="checkbox" className="" id="" /> Woment
                                    </li>
                                    <li>
                                        <input type="checkbox" className="" id="" /> Kid
                                    </li>
                                    <li>
                                        <input type="checkbox" className="" id="" /> Unisex
                                    </li>
                                </ul>
                                <hr />
                                <h5>Shop by price</h5>
                                <ul className='list-group'>
                                    <li><input type="checkbox" className="" id="" /> Under 1.000.000</li>
                                    <li><input type="checkbox" className="" id="" /> 1,000,000 - 2,000,000</li>
                                    <li><input type="checkbox" className="" id="" /> 2,000,000 - 5,000,000</li>
                                    <li><input type="checkbox" className="" id="" /> Over 5,000,000</li>
                                </ul>
                            </div>

                        </div>
                        <div className='col-md-10 col-sm-12 ps-md-5'>
                            <Row xs={2} md={3} className="">
                                {Array.from({ length: 9 }).map((_, idx) => (
                                    <Col key={idx}>
                                        <Card className='pb-4'>
                                            <Card.Img variant="top" src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/51867688-277b-4615-ab39-876653f6b810/dunk-low-retro-shoe-66RGqF.png" />
                                            <Card.Body>
                                                <Card.Title>Nike Dunk Low Retro</Card.Title>
                                                <Card.Text variant='light'>Men's shoes</Card.Text>
                                                <Card.Text>2,909,000</Card.Text>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                    </div>
                </div>
            </Container>
            <Footer></Footer>
        </>

    );
}
export default ListProduct;