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
                    id="100000"
                    title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
                    price={598.99}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
                />
                <Product
                    id="120000"
                    title="New Apple MacBook Pro (13-inch, 8GB RAM, 256GB SSD Storage, Magic Keyboard) - Space Gray"
                    price={1249.00}
                    rating={5}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71HI3U9ZwZL._AC_SL1500_.jpg"}
                />
            </div>
            
            <div className="home__row">
                
                <Product
                    id="13000"
                    title="Python Crash Course, 2nd Edition"
                    price={21.99}
                    rating={5}
                    image={"https://images-na.ssl-images-amazon.com/images/I/510-dE3N1PL._SX376_BO1,204,203,200_.jpg"}
                />
                <Product
                    id="140000"
                    title="A Game of Thrones: Bookset 1-5"
                    price={39.99}
                    rating={4}
                    image={"https://m.media-amazon.com/images/I/91HSa7sG8tL._AC_UY218_.jpg"}
                />

<Product
                    id="150000"
                    title="Kindle Paperwhite – with 2x the Storage"
                    price={129.99}
                    rating={3}
                    image={"https://m.media-amazon.com/images/I/61eAq6gg-XL._AC_UY218_.jpg"}
                />
            </div>

            <div className="home__row">
                <Product
                    id="160000"
                    title="Razer Huntsman Gaming Keyboard: Fastest Keyboard Switches Ever - Clicky Optical Switches - Customizable Chroma RGB Lighting - Programmable Macro Functionality - Classic Black"
                    price={89.99}
                    rating={4}
                    image={"https://images-na.ssl-images-amazon.com/images/I/71FJGmeJ2GL._AC_SL1500_.jpg"}
                />
            </div>

        </div>
    );
}

export default Home
