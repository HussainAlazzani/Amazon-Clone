import React from "react";
import Product from "./Product";
import "./Home.css";

const Home = () => {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://images-eu.ssl-images-amazon.com/images/G/02/kindle/journeys/YTFhNjA1Y2It/YTFhNjA1Y2It-YzFmMzZlZjEt-w1500._CB655779869_.jpg"
                    ali=""
                />
                <div className="home__row">
                    <Product
                        id={0}
                        title="Apple iPhone: a smartphone made by Apple that combines a computer, iPod, digital camera and cellular phone into one device."
                        price={699.99}
                        image="https://media.secure-mobiles.com/product-images/apple-iphone-7-32gb-silver-refurbished.responsive-fs.centre.png"
                        rating={4}
                    />
                    <Product
                        id={1}
                        title="Pink handbag: A handbag is any type of bag or case that can be carried either by hand or over the shoulder."
                        price={69.99}
                        image="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1605045110-marge-sherwood-mini-pump-croc-effect-leather-top-handle-bag-1605045098.jpg"
                        rating={2}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={2}
                        title="Tennis Racquet: consisting of a handled frame with an open hoop."
                        price={39.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/51csCPXM5OL._AC_SY450_.jpg"
                        rating={4}
                    />
                    <Product
                        id={3}
                        title="Hot water bottle great to apply to a specific body part to keep it warm."
                        price={19.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/71f0QMaLoGL._AC_SL1500_.jpg"
                        rating={5}
                    />
                    <Product
                        id={4}
                        title="Protein shake bottle. A great bottle to shake your favourite protein powder"
                        price={3.99}
                        image="https://img.theproteinworks.com/v7/_img/catalog/product/cache/a9507dc7de230774c33fc0b36b35e77f/a/c/accblendltd_right-pdp2018.png"
                        rating={4}
                    />
                </div>
                <div className="home__row">
                    <Product
                        id={5}
                        title="Marker pen pack. This is a great pack and very cheap."
                        price={2.99}
                        image="https://images-na.ssl-images-amazon.com/images/I/81FWpGkMD2L._AC_SL1500_.jpg"
                        rating={5}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;