'use client'
import React, { useContext } from "react";
import Link from "next/link";
import StarRatings from "react-star-ratings";
import CartContext from '../context/CartContext'

const ProductItem = ({ product }) => {
    const { addItemToCart } = useContext(CartContext);

    const addToCartHandler = () => {
        addItemToCart({
            product: product._id,
            name: product.name,
            price: product.price,
            image: product.images[0].url,
            stock: product.stock,
            seller: product.seller,
        });
    };

    return (
        <article className="border border-gray-200 overflow-hidden bg-white shadow-sm rounded mb-5">
            <div className="flex flex-col md:flex-row">
                <div className="md:w-1/4 flex p-3">
                    <img
                        src={
                            product?.images[0]
                                ? product?.images[0].url
                                : "https://www.designinfo.in/wp-content/uploads/2023/01/Apple-iPhone-14-Pro-Mobile-Phone-493177786-i-1-1200Wx1200H-485x485-optimized.jpeg"
                        }
                        alt="product name"
                        className="object-fill max-h-52"
                    />
                </div>
                <div className="md:w-2/4">
                    <div className="p-4">
                        <Link href={`/productList/${product._id}`} className="hover:underline">
                            <h2 className="text-xl font-semibold text-gray-900">
                                {product.name}
                            </h2>
                        </Link>
                        <div className="flex flex-wrap items-center space-x-2 my-2">
                            <div className="ratings">
                                <div className="my-1">
                                    <StarRatings
                                        rating={product?.ratings}
                                        starRatedColor="#FFD700"
                                        numberOfStars={5}
                                        starDimension="18px"
                                        starSpacing="1px"
                                        name="rating"
                                    />
                                </div>
                            </div>
                            <span className="text-gray-500">{product?.ratings}</span>
                        </div>
                        <p className="text-gray-600 mb-2 line-clamp-3">
                            {product?.description}
                        </p>
                    </div>
                </div>
                <div className="md:w-1/4 border-t lg:border-t-0 lg:border-l-2 border-gray-200 flex flex-col justify-center items-center">
                    <div className="p-5">
                        <span className="text-2xl font-semibold text-black">
                            ₹ {product?.price.toLocaleString()}
                        </span>
                        <p className="text-green-600">Free Shipping</p>
                        <button className="my-3 text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-800 cursor-pointer px-2 py-2"
                            onClick={addToCartHandler}
                        >
                            <i className="fa-solid fa-cart-shopping"></i>
                            <a
                                className="ml-1 inline-block"
                                role="button"
                            >
                                Add to Cart
                            </a>
                        </button>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductItem;
