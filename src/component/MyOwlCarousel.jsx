import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Image from 'react-bootstrap/Image';

const MyOwlCarousel = () => {
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
        <div>
            {/* // className "owl-theme" is optional */}
            <OwlCarousel className='owl-carousel owl-theme' {...option}>
                <div className="item">
                    <Image src='https://static.nike.com/a/images/f_auto,cs_srgb/w_960,c_limit/428611ed-169d-483d-9872-86165159213e/nike-just-do-it.jpg'></Image>
                    <div className="pt-3">
                        <h5>Air Jordan 1 Low SE</h5>
                        <p>Men's Shoes</p>
                        <h5>3,519,000₫</h5>
                    </div>
                </div>
                <div className="item">
                    <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/db148950-20f5-4801-b53d-771c55c89373/nike-just-do-it.jpg'></Image>
                    <div className="pt-3">
                        <h5>Air Jordan 1 Low SE</h5>
                        <p>Men's Shoes</p>
                        <h5>3,519,000₫</h5>
                    </div>
                </div>
                <div className="item">
                    <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/91f839aa-b110-4acc-879a-2cea80bc580c/nike-just-do-it.jpg'></Image>
                    <div className="pt-3">
                        <h5>Air Jordan 1 Low SE</h5>
                        <p>Men's Shoes</p>
                        <h5>3,519,000₫</h5>
                    </div>
                </div>
                <div className="item">
                    <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/2c316733-7080-4fa9-84f9-c804fac9d053/nike-just-do-it.jpg'></Image>
                    <div className="pt-3">
                        <h5>Air Jordan 1 Low SE</h5>
                        <p>Men's Shoes</p>
                        <h5>3,519,000₫</h5>
                    </div>
                </div>
                <div className="item">
                    <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/64438d05-3165-4922-a77e-e3f6e08496bc/nike-just-do-it.jpg'></Image>
                    <div className="pt-3">
                        <h5>Air Jordan 1 Low SE</h5>
                        <p>Men's Shoes</p>
                        <h5>3,519,000₫</h5>
                    </div>
                </div>
                <div className="item">
                    <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/f831c281-1eee-4355-bc21-7503ecfa5526/nike-just-do-it.jpg'></Image>
                    <div className="pt-3">
                        <h5>Air Jordan 1 Low SE</h5>
                        <p>Men's Shoes</p>
                        <h5>3,519,000₫</h5>
                    </div>
                </div>
                <div className="item">
                    <Image src='https://static.nike.com/a/images/f_auto/dpr_1.3,cs_srgb/w_1423,c_limit/265c0427-d117-4a13-a5cc-180e4370a2a2/nike-just-do-it.jpg'></Image>
                    <div className="pt-3">
                        <h5>Air Jordan 1 Low SE</h5>
                        <p>Men's Shoes</p>
                        <h5>3,519,000₫</h5>
                    </div>
                </div>
            </OwlCarousel>
        </div>
    )
}
export default MyOwlCarousel;