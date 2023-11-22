// "use client";

// import React, { useState } from "react";
// import StarRatings from "react-star-ratings";
// import Hero from "../components/hero/Hero";
// import { useRouter, useSearchParams } from "next/navigation";

// const Filters = ({ children }) => {

//     const router = useRouter();
//     const searchParams = useSearchParams();


//     const [selectedCategory, setSelectedCategory] = useState(null);
//     const [selectedRating, setSelectedRating] = useState(null);
//     const [sortOrder, setSortOrder] = useState(null);

//     const handleCategoryChange = (value) => {
//         setSelectedCategory((prevValue) => (prevValue === value ? null : value));

//         let queryParams;
//         if (typeof window !== 'undefined') {
//             queryParams = new URLSearchParams(window.location.search);
//         }
//         if (queryParams.has('category')) {
//             queryParams.set('category', value);
//         } else {
//             queryParams.append('category', value);
//         }
//         if (queryParams.has('sort') || queryParams.has('keyword') || queryParams.has('rating')) {
//             router.push(`${window.location.pathname}&${queryParams.toString()}`);
//         } else {
//             router.push(`${window.location.pathname}${window.location.search ? '&' : '?'}${queryParams.toString()}`);
//         }
//     };


//     const handleRatingChange = (value) => {
//         setSelectedRating((prevValue) => (prevValue === value ? null : value));
//         let queryParams;
//         if (typeof window !== 'undefined') {
//             queryParams = new URLSearchParams(window.location.search);
//         }
//         if (queryParams.has('rating')) {
//             queryParams.set('rating', value);
//         } else {
//             queryParams.append('rating', value);
//         }
//         if (queryParams.has('category') || queryParams.has('keyword') || queryParams.has('sort')) {
//             router.push(`${window.location.pathname}&${queryParams.toString()}`);
//         } else {
//             router.push(`${window.location.pathname}${window.location.search ? '&' : '?'}${queryParams.toString()}`);
//         }
//     };


//     const handleSortOrderChange = (order) => {
//         setSortOrder(order);
//         let queryParams;
//         if (typeof window !== 'undefined') {
//             queryParams = new URLSearchParams(window.location.search);
//         }
//         if (queryParams.has('sort')) {
//             queryParams.set('sort', order);
//         } else {
//             queryParams.append('sort', order);
//         }

//         if (queryParams.has('category') || queryParams.has('keyword') || queryParams.has('rating')) {
//             router.push(`${window.location.pathname}&${queryParams.toString()}`);
//         } else {
//             router.push(`${window.location.pathname}${window.location.search ? '&' : '?'}${queryParams.toString()}`);
//         }
//     };

//     return (
//         <div>
//             <Hero />
//             <div className="flex flex-row gap-1 py-8 px-2">
//                 <aside className="md:w-1/3 lg:w-1/4">
//                     <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
//                         <h3 className="font-semibold mb-2">Sort Order</h3>
//                         <div className="flex items-center space-x-2">
//                             <button
//                                 onClick={() => handleSortOrderChange("lowToHigh")}
//                                 className={`px-2 py-1 text-center w-full inline-block text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-800 ${sortOrder === "lowToHigh" ? "bg-yellow-800" : ""
//                                     }`}
//                             >
//                                 Low to High
//                             </button>
//                             <button
//                                 onClick={() => handleSortOrderChange("highToLow")}
//                                 className={`px-2 py-1 text-center w-full inline-block text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-800 ${sortOrder === "highToLow" ? "bg-yellow-800" : ""
//                                     }`}
//                             >
//                                 High to Low
//                             </button>
//                         </div>
//                     </div>

//                     <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
//                         <h3 className="font-semibold mb-2">Category</h3>
//                         <ul className="space-y-1">
//                             {/* Modify the category checkboxes to allow only one selection */}
//                             {["Electronics", "Laptops", "Cameras", "Accessories", "Headphones", "Sports"].map(
//                                 (category) => (
//                                     <li key={category}>
//                                         <label className="flex items-center">
//                                             <input
//                                                 name="category"
//                                                 type="radio"
//                                                 value={category}
//                                                 checked={category === selectedCategory}
//                                                 onChange={() => handleCategoryChange(category)}
//                                                 className="h-4 w-4"
//                                             />
//                                             <span className="ml-2 text-gray-500">{category}</span>
//                                         </label>
//                                     </li>
//                                 )
//                             )}
//                         </ul>
//                     </div>


//                     <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
//                         <h3 className="font-semibold mb-2">Price (₹)</h3>
//                         <div className="grid md:grid-cols-3 gap-x-2">
//                             <div className="mb-4">
//                                 <input
//                                     name="min"
//                                     className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
//                                     type="number"
//                                     placeholder="Min"
//                                 />
//                             </div>

//                             <div className="mb-4">
//                                 <input
//                                     name="max"
//                                     className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
//                                     type="number"
//                                     placeholder="Max"
//                                 />
//                             </div>

//                             <div className="mb-4">
//                                 <button className="px-1 py-2 text-center w-full inline-block text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-800">
//                                     Go
//                                 </button>
//                             </div>
//                         </div>
//                     </div>

//                     <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
//                         <h3 className="font-semibold mb-2">Ratings</h3>
//                         <ul className="space-y-1">
//                             <li>
//                                 {[5, 4, 3, 2, 1].map((rating) => (
//                                     <label key={rating} className="flex items-center">
//                                         <input
//                                             name="ratings"
//                                             type="radio"
//                                             value={rating}
//                                             className="h-4 w-4"
//                                             onChange={() => handleRatingChange(rating)}
//                                         />
//                                         <span className="ml-2 text-gray-500">
//                                             {" "}
//                                             <StarRatings
//                                                 rating={rating}
//                                                 starRatedColor="#ffb829"
//                                                 numberOfStars={5}
//                                                 starDimension="20px"
//                                                 starSpacing="2px"
//                                                 name="rating"
//                                             />{" "} {rating == 5 ? " " : "& Up"}
//                                         </span>
//                                     </label>
//                                 ))}
//                             </li>
//                         </ul>
//                     </div>

//                 </aside>

//                 <div className="md:w-2/3 lg:w-3/4 px-4">{children}</div>
//             </div>
//         </div>
//     );
// };

// export default Filters;


"use client";

import React, { useState } from "react";
import StarRatings from "react-star-ratings";
import Hero from "../components/hero/Hero";
import { useRouter, useSearchParams } from "next/navigation";

const Filters = ({ children }) => {
    const router = useRouter();
    const searchParams = useSearchParams();

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [selectedRating, setSelectedRating] = useState([]);
    const [sortOrder, setSortOrder] = useState(null);

    const handleCategoryChange = (value) => {
        setSelectedCategory((prevValue) => (prevValue === value ? null : value));
        updateUrlParams({ category: value });
    };

    const handleRatingChange = (value) => {
        setSelectedRating((prevValue) => (prevValue === value ? null : value));
        updateUrlParams({ rating: value });
    };

    const handleSortOrderChange = (order) => {
        setSortOrder(order);
        updateUrlParams({ sort: order });
    };

    const updateUrlParams = (params) => {
        let queryParams;
        if (typeof window !== 'undefined') {
            queryParams = new URLSearchParams(window.location.search);
        }

        Object.keys(params).forEach((key) => {
            if (queryParams.has(key)) {
                queryParams.set(key, params[key]);
            } else {
                queryParams.append(key, params[key]);
            }
        });

        const path =
            window.location.pathname +
            (queryParams.toString() !== '' ? '?' : '') +
            queryParams.toString();

        router.push(path);
    };

    return (
        <div>
            <Hero />
            <div className="flex flex-row gap-1 py-8 px-2">
                <aside className="md:w-1/3 lg:w-1/4">
                    <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
                        <h3 className="font-semibold mb-2">Sort Order</h3>
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => handleSortOrderChange("lowToHigh")}
                                className={`px-2 py-1 text-center w-full inline-block text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-800 ${sortOrder === "lowToHigh" ? "bg-yellow-800" : ""
                                    }`}
                            >
                                Low to High
                            </button>
                            <button
                                onClick={() => handleSortOrderChange("highToLow")}
                                className={`px-2 py-1 text-center w-full inline-block text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-800 ${sortOrder === "highToLow" ? "bg-yellow-800" : ""
                                    }`}
                            >
                                High to Low
                            </button>
                        </div>
                    </div>

                    <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
                        <h3 className="font-semibold mb-2">Category</h3>
                        <ul className="space-y-1">
                            {["Electronics", "Laptops", "Cameras", "Accessories", "Headphones", "Sports"].map(
                                (category) => (
                                    <li key={category}>
                                        <label className="flex items-center">
                                            <input
                                                name="category"
                                                type="radio"
                                                value={category}
                                                checked={category === selectedCategory}
                                                onChange={() => handleCategoryChange(category)}
                                                className="h-4 w-4"
                                            />
                                            <span className="ml-2 text-gray-500">{category}</span>
                                        </label>
                                    </li>
                                )
                            )}
                        </ul>
                    </div>

                    <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
                        <h3 className="font-semibold mb-2">Price (₹)</h3>
                        <div className="grid md:grid-cols-3 gap-x-2">
                            <div className="mb-4">
                                <input
                                    name="min"
                                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                                    type="number"
                                    placeholder="Min"
                                />
                            </div>

                            <div className="mb-4">
                                <input
                                    name="max"
                                    className="appearance-none border border-gray-200 bg-gray-100 rounded-md py-2 px-3 hover:border-gray-400 focus:outline-none focus:border-gray-400 w-full"
                                    type="number"
                                    placeholder="Max"
                                />
                            </div>

                            <div className="mb-4">
                                <button className="px-1 py-2 text-center w-full inline-block text-white bg-yellow-600 border border-transparent rounded-md hover:bg-yellow-800">
                                    Go
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="hidden md:block px-6 py-4 border border-gray-200 bg-white rounded shadow-sm">
                        <h3 className="font-semibold mb-2">Ratings</h3>
                        <ul className="space-y-1">
                            <li>
                                {[5, 4, 3, 2, 1].map((rating) => (
                                    <label key={rating} className="flex items-center">
                                        <input
                                            name="ratings"
                                            type="radio"
                                            value={rating}
                                            className="h-4 w-4"
                                            onChange={() => handleRatingChange(rating)}
                                        />
                                        <span className="ml-2 text-gray-500">
                                            {" "}
                                            <StarRatings
                                                rating={rating}
                                                starRatedColor="#ffb829"
                                                numberOfStars={5}
                                                starDimension="20px"
                                                starSpacing="2px"
                                                name="rating"
                                            />{" "} {rating == 5 ? " " : "& Up"}
                                        </span>
                                    </label>
                                ))}
                            </li>
                        </ul>
                    </div>
                </aside>

                <div className="md:w-2/3 lg:w-3/4 px-4">{children}</div>
            </div>
        </div>
    );
};

export default Filters;
