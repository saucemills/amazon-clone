import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/YTQzYWRkNWYt/YTQzYWRkNWYt-ZjJhMTc3NzUt-w3000._CB415378461_.jpg"
                alt=""
                />
                <div className="home__row">
                    <Product
                        id="1"
                        title="Fire TV Stick Lite with Alexa Voice Remote Lite (no TV controls) | HD streaming device | 2020 release"
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Da2Z%2BFTFL._AC_SL1000_.jpg"
                        rating={5}
                    />
                    <Product
                        id="2"
                        title='Fire HD 10 Tablet (10.1" 1080p full HD display, 32 GB) – Black'
                        price={79.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61vUiHar9rL._AC_SL1000_.jpg"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="3"
                        title='Echo Auto- Hands-free Alexa in your car with your phone'
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/31X1pWv1CXL._AC_.jpg"
                        rating={4}
                    />
                    <Product
                        id="4"
                        title='All-new Echo Dot (4th Gen) | Smart speaker with Alexa | Charcoal'
                        price={28.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/714Rq4k05UL._AC_SL1000_.jpg"
                        rating={5}
                    />
                    <Product
                        id="5"
                        title='Kindle Paperwhite – Now Waterproof with 2x the Storage – Ad-Supported'
                        price={84.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/61eAq6gg-XL._AC_SL1000_.jpg"
                        rating={5}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id="6"
                        title='SAMSUNG 50-inch Class Crystal UHD TU-8000 Series - 4K UHD HDR Smart TV with Alexa Built-in'
                        price={379.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71RiQZ0J2SL._AC_SL1000_.jpg"
                        rating={4}
                    />
                </div>
            </div>
        </div>
    )
}

export default Home;
