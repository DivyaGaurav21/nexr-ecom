'use client'
import axios from 'axios';
import ProductList from './ProductList';
import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [productData, setProductData] = useState([]);

    const handlePageClick = (e) => {
        setCurrentPage(e.selected + 1);
    };

    useEffect(() => {
        const fetchInitialData = async () => {
            try {
                const response = await axios.get(`${process.env.API_URL}/api/product?page=${currentPage}`);
                setProductData(response.data);
            } catch (error) {
                console.error('Error fetching product data:', error);
            }
        };

        fetchInitialData();
    }, [currentPage]);

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
