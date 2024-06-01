import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from '../component/Header';
import Footer from '../component/Footer';


const HomePage = () => {

    // tạo biến option chứa các biến là thuộc tính của owl carousel
    const option = {
        items: 1,
        loop: true,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'slideoutUp',
        nav: true,
        dots: true,

        margin: 10,
        navClass: ['owl-prev', 'owl-next', 'owl-line'],

        navText: [
            '<i class="next position-absolute top-50 start-0 fa-solid fa-angle-left"></i>',
            '<i class="next position-absolute top-50 end-0 fa-solid fa-angle-right"></i>',
            '<input type="range" min="0" max="100" value="100" id="slider">'
        ],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 5
            }
        }

    }

    return (
        <>
            <Header></Header>
            <div className='text-center'>
                <div style={{ fontFamily: 'Times New Roman', background: '#f5f5f5' }} className='py-2'>
                    <span>Move, Shop, Customise & Celebrate With Us. <br /> No matter what you feel like doing today, It’ s better as a Member. <br /> <a href="" style={{ color: 'black', fontWeight: 600 }}>Join Us</a></span>
                </div>
                <Container fluid>
                    <div className='px-lg-5'>
                        <div >
                            <Image src="https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/bdca8181-69e2-4926-bbd0-0b8c833852a6/nike-just-do-it.jpg" fluid />
                            <div className='py-4'>
                                <p>Air Max 90 lv8</p>
                                <h3 className='headline-5 headline-4'>DOUBLE STACKED. <br /> DOUBLE FUN.</h3>
                                <p>Play all day, dance all night in elevated, eye-catching comfort. <br />Introducing the all new Air Max 90 LV8, styled by NewJeans. </p>
                                <Button variant="dark" style={{ borderRadius: '50px' }}>Shop Air Max 90 lv8</Button>
                            </div>
                        </div>

                        <div>
                            <h4 className='text-start py-4'>Featured</h4>
                            <Container>
                                <Row>
                                    <Col md={4} sx={1}>
                                        <Image fluid src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_787,c_limit/e0f5ce01-12ba-4008-bf71-19f7d19d9546/nike-just-do-it.jpg'></Image>
                                        <h5 className='text-start py-4'>Women's Air Max</h5>
                                    </Col>
                                    <Col md={4} sx={1}>
                                        <Image fluid src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_787,c_limit/9acc372f-ae99-47bd-a581-1f8fae389fc0/nike-just-do-it.jpg'></Image>
                                        <h5 className='text-start py-4'>Man's Air Max</h5>
                                    </Col>
                                    <Col md={4} sx={1}>
                                        <Image fluid src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/h_787,c_limit/c4ca8340-cce0-4670-8770-984c567854d5/nike-just-do-it.jpg'></Image>
                                        <h5 className='text-start py-4'>Kid's Air Max</h5>
                                    </Col>
                                </Row>
                            </Container>
                        </div>


                        <div>
                            <h4 className='text-start py-4'>Trending</h4>
                            <div>
                                <Image src="https://sneakernews.com/wp-content/uploads/2023/11/nike-alphafly-3-volt-FD8311-700-6.jpg" fluid />
                                <div className='py-4'>
                                    <p>Mike Alphafly 3</p>
                                    <h3 className='headline-5 headline-4'>LEAVE YOURSELF IN THE DUST</h3>
                                    <p>Marathon speed to push beyond what you thought possible.</p>
                                    <Button variant="dark" style={{ borderRadius: '50px' }}>Shop Mike Alphafly 3</Button>
                                </div>
                            </div>
                        </div>

                        <div className='pb-4'>
                            <h4 className='text-start py-4'>Alaway Iconic</h4>
                            <div>
                                {/* // className "owl-theme" is optional */}
                                <OwlCarousel className='owl-carousel owl-theme' {...option}>
                                    <div className="item">
                                        <Image src='https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/428611ed-169d-483d-9872-86165159213e/nike-just-do-it.jpg'></Image>
                                        <h4>1</h4>
                                    </div>
                                    <div className="item">
                                        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/db148950-20f5-4801-b53d-771c55c89373/nike-just-do-it.jpg'></Image>
                                        <h4>2</h4>
                                    </div>
                                    <div className="item">
                                        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/91f839aa-b110-4acc-879a-2cea80bc580c/nike-just-do-it.jpg'></Image>
                                        <h4>3</h4>
                                    </div>
                                    <div className="item">
                                        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/2c316733-7080-4fa9-84f9-c804fac9d053/nike-just-do-it.jpg'></Image>
                                        <h4>4</h4>
                                    </div>
                                    <div className="item">
                                        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/64438d05-3165-4922-a77e-e3f6e08496bc/nike-just-do-it.jpg'></Image>
                                        <h4>5</h4>
                                    </div>
                                    <div className="item">
                                        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/f831c281-1eee-4355-bc21-7503ecfa5526/nike-just-do-it.jpg'></Image>
                                        <h4>6</h4>
                                    </div>
                                    <div className="item">
                                        <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/265c0427-d117-4a13-a5cc-180e4370a2a2/nike-just-do-it.jpg'></Image>
                                        <h4>7</h4>
                                    </div>
                                </OwlCarousel>
                            </div>
                        </div>
                    </div>
                </Container >
            </div>
            <Footer></Footer>
        </>

    );
}

export default HomePage;