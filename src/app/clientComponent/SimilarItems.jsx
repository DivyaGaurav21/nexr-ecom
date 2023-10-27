'use client'
import React from 'react';
import SimilarProductCard from './SimilarProductCard';
const SimilarItems = ({ allProductData, productCateogary }) => {

    const allRelatedProducts = allProductData.filter(product => product.category === productCateogary);
    console.log(allRelatedProducts)

    return (
        <div className='border-t-2 border-red-100'>
            <h1 className='text-center py-6 text-2xl font-extrabold text-yellow-600'>{`similar ${productCateogary.toLowerCase()} items`}</h1>
            <div className='flex flex-row gap-2'>
                {
                    allRelatedProducts.slice(0, 4).map(similarProduct =>
                        <SimilarProductCard
                            key={similarProduct._id}
                            similarProduct={similarProduct}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default SimilarItems