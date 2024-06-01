import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Header from '../component/Header';
import Footer from '../component/Footer';
import MyOwlCarousel from "../component/MyOwlCarousel";
import MyImageGallery from '../component/MyImageGallery';

const DetailProduct = () => {

    return (
        <>
            <Header/>
            <Container fluid className="py-4 px-lg-5">
                <div className="row px-lg-5 mx-5">
                    <div className="col-md-6">
                        <Container>
                            <MyImageGallery></MyImageGallery>
                        </Container>
                    </div>

                    <div className="col-md-6 px-md-5">
                        <div className="pt-3">
                            <h4>Air Jordan 1 Low SE</h4>
                            <p>Men's Shoes</p>
                            <h4>3,519,000₫</h4>
                        </div>
                        <div className="pt-5">
                            <p>Select Size</p>
                            <Row md={3} className="">
                                {Array.from({ length: 9 }).map((_, idx) => (
                                    <Col key={idx} className="py-1">
                                        <div className="rounded border border-secondary-subtle p-2 text-center">EU 40</div>
                                    </Col>
                                ))}
                            </Row>
                        </div>
                        <div className="py-3 row mx-5">
                            <Button className="p-3 mb-3" variant="dark" style={{ borderRadius: '50px' }}>Add to Bag</Button>
                            <Button className="p-3" variant="light" style={{ borderRadius: '50px', border: '1px solid' }}>Favourite <i className="fa-regular fa-heart px-1"></i></Button>
                        </div>
                        <div>
                            <p>Here's some straightforward, good-looking AJ1s. Were you expecting anything less? Crafted from crisp leather, they feature comfortable Nike Air cushioning in the sole. An embroidered Swoosh logo puts the finishing touch on this all-time favourite.</p>
                        </div>

                    </div>
                </div>

                <div className='pb-4'>
                    <h4 className='text-start py-4'>You Might Also Like</h4>
                    <MyOwlCarousel></MyOwlCarousel>
                </div>


            </Container>
        <Footer></Footer>

        </>
    );
}
export default DetailProduct;