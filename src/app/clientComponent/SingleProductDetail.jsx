'use client'
import React, { useRef } from "react";
import StarRatings from "react-star-ratings";
import BreadCrumbs from './BreadCrumbs'

const SingleProductDetail = ({ singleProductData }) => {
    const imgRef = useRef(null);

    const setImgPreview = (url) => {
        imgRef.current.src = url;
    };

    const inStock = singleProductData?.stock >= 1;

    const breadCrumbs = [
        { name: "Home", url: "/productList" },
        {
            name: `${singleProductData?.name?.substring(0, 80)} ...`,
            url: `/productList/${singleProductData?._id}`,
        },
    ];

    return (
        <>
            <BreadCrumbs breadCrumbs={breadCrumbs} />
            <section className="bg-white py-10">
                <div className="container max-w-screen-xl mx-auto px-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5">
                        <aside>
                            <div className="border border-gray-200 shadow-sm p-3 text-center rounded mb-5 w-[300px] h-[250px] md:w-[400px] md:h-[350px] m-auto">
                                <img
                                    ref={imgRef}
                                    className="object-fill inline-block w-full h-full"
                                    src={
                                        singleProductData?.images[0]
                                            ? singleProductData?.images[0].url
                                            : "/images/default_product.png"
                                    }
                                    alt="Product title"

                                />
                            </div>
                            <div className="w-full flex gap-2 flex-wrap justify-center">
                                {singleProductData?.images?.map((img, index) => (
                                    <a
                                        key={index}
                                        className="inline-block border border-gray-200 p-1 rounded-md hover:border-red-500 cursor-pointer"
                                        onClick={() => setImgPreview(img?.url)}
                                    >
                                        <img
                                            className="w-20 h-20"
                                            src={img.url}
                                            alt="Product title"
                                        />
                                    </a>
                                ))}
                            </div>
                        </aside>
                        <main>
                            <h2 className="font-semibold text-3xl mb-4"> {singleProductData?.name} </h2>

                            <div className="flex flex-wrap items-center space-x-2 mb-2">
                                <div className="ratings">
                                    <StarRatings
                                        rating={singleProductData?.ratings}
                                        starRatedColor="#FFD700" // Gold color for stars
                                        numberOfStars={5}
                                        starDimension="24px" // Increase star size
                                        starSpacing="2px"
                                        name="rating"
                                    />
                                </div>
                                <span className="text-yellow-500">{singleProductData?.ratings}</span>

                                <span className="text-green-500">Verified</span>
                            </div>

                            <p className="mb-4 font-semibold text-2xl">₹  {singleProductData?.price.toLocaleString()}</p>

                            <p className="mb-4 text-gray-500">{singleProductData?.description}</p>

                            <div className="my-3">
                                <a
                                    className="px-4 py-2 inline-block text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-800 cursor-pointer"
                                    role="button"
                                >
                                    <i className="fa-solid fa-cart-shopping mr-1"></i>
                                    Add to Cart
                                </a>
                            </div>

                            <ul className="mb-5">
                                <li className="mb-1">
                                    <b className="font-medium w-36 inline-block">Stock:</b>
                                    {inStock ? (
                                        <span className="text-green-500 font-extrabold">In Stock</span>
                                    ) : (
                                        <span className="text-red-500">Out of Stock</span>
                                    )}
                                </li>
                                <li className="mb-1">
                                    <b className="font-medium w-36 inline-block">Category:</b>
                                    <span className="text-gray-500">{singleProductData?.category}</span>
                                </li>
                                <li className="mb-1">
                                    <b className="font-medium w-36 inline-block">Seller / Brand:</b>
                                    <span className="text-gray-500">{singleProductData?.seller}</span>
                                </li>
                            </ul>
                        </main>
                    </div>

                    <hr />

                    <div className="font-semibold">
                        <h1 className="text-gray-500 review-title mb-6 mt-10 text-2xl">
                            Other Customers Reviews
                        </h1>
                        {/* Add your review component here */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SingleProductDetail;
