import React from 'react'
import Product from './Product'
import "./Home.css";


function Home() {
    return (
        <div className="home">
            <img 
                className="home__image"
                src="https://images-na.ssl-images-amazon.com/images/G/01/Events/2020/APDHF2/XCM_CUTTLE_1255120_1316018_US_PD20_3296365_1500x600_2X_US_en.jpg._CB406287657_.jpg" 
                alt="" 
            />
            <div className="home__row">
                <Product
                    id="3254354345"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
                <Product
                    id="123123423"
                    title="Product One, The best book there ever was"
                    price={12.99}
                    rating={5}
                    image={"https://images.unsplash.com/photo-1578021046026-483fa99ffad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=8https://m.media-amazon.com/images/I/71k3fJh5EwL._AC_UY218_.jpg"}
                />
            </div>
            
            <div className="home__row">
                <Product
                    id="123123423"
                    title="Product One, The best book there ever was"
                    price={12.99}
                    rating={5}
                    image={"https://images.unsplash.com/photo-1578021046026-483fa99ffad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
                />
                <Product
                    id="123123423"
                    title="Product One, The best book there ever was"
                    price={12.99}
                    rating={5}
                    image={"https://images.unsplash.com/photo-1578021046026-483fa99ffad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
                />
                <Product
                    id="123123423"
                    title="Product One, The best book there ever was"
                    price={12.99}
                    rating={5}
                    image={"https://images.unsplash.com/photo-1578021046026-483fa99ffad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
                />
            </div>

            <div className="home__row">
                <Product
                    id="123123423"
                    title="Product One, The best book there ever was"
                    price={12.99}
                    rating={5}
                    image={"https://images.unsplash.com/photo-1578021046026-483fa99ffad2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}
                />
            </div>

        </div>
    );
}

export default Home
