/**
 * Single Product Page component fetches and displays details of a specific product and related items.
 * It uses Axios to fetch product data from the API based on the provided product ID.
 * The SingleProductDetail component is used to display the details of the selected product.
 * The SimilarItems component is used to display other products in the same category.
 * @param {Object} params - Route parameters, including 'singleProductId' for the specific product.
 * @returns {JSX.Element} - Rendered component displaying the single product details and similar items.
 */
import axios from "axios"
import SingleProductDetail from '@/app/clientComponent/SingleProductDetail'
import SimilarItems from '@/app/clientComponent/SimilarItems'

const singleProduct = async ({ params }) => {
    // Fetch details of the specific product using the provided product ID
    const { data } = await axios.get(`${process.env.API_URL}/api/product/${params.singleProductId}`)
    // Fetch all product data to find similar items in the same category
    const productData = await axios.get(`${process.env.API_URL}/api/product`);
    // Render the SingleProductDetail component for the selected product and SimilarItems for related products
    return (
        <div>
            <SingleProductDetail singleProductData={data.singleProductDetail} />
            <SimilarItems allProductData={productData.data.products} productCateogary={data.singleProductDetail.category} />
        </div>
    )
}

export default singleProduct

