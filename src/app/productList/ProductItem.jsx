'use client'
import React from "react";
import Link from "next/link";
import StarRatings from "react-star-ratings";

const ProductItem = ({ product }) => {
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
                        className="object-fill"
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
                            ₹ {product?.price}
                        </span>
                        <p className="text-green-600">Free Shipping</p>
                        <div className="my-3">
                            <a
                                className="px-4 py-2 inline-block text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-800 cursor-pointer"
                                role="button"
                            >
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </article>
    );
};

export default ProductItem;
