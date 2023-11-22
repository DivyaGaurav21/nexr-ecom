'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ReactPaginate from 'react-paginate';
import queryString from 'query-string';


const Page = ({ searchParams }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productData, setProductData] = useState([]);

    const urlParams = {
        keyword: searchParams.keyword,
        page: currentPage,
        category: searchParams.category
    }

    const searchQuery = queryString.stringify(urlParams);


    const handlePageClick = (e) => {
        setCurrentPage(e.selected + 1);
    };

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await axios.get(`${process.env.API_URL}/api/product?${searchQuery}`);
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchInitialData();
    }, [currentPage, searchParams]);

    return (
        <div>
            <ProductList allProductData={productData} />
            <ReactPaginate
                onPageChange={handlePageClick}
                pageCount={10}
                pageClassName="flex items-center mx-2 text-gray-600 hover:text-blue-500 cursor-pointer border border-black px-3"
                activeClassName="font-bold text-blue-500"
                containerClassName="pagination flex space-x-2"
                previousClassName="flex items-center mx-2 text-gray-600 hover:text-blue-500 cursor-pointer border border-black px-2"
                nextClassName="flex items-center mx-2 text-gray-600 hover:text-blue-500 cursor-pointer border border-black px-2"
                previousLabel={<span>&lt; Previous</span>}
                nextLabel={<span>Next &gt;</span>}
            />
        </div>
    );
};

export default Page;
