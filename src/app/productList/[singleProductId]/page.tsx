import axios from "axios"
import SingleProductDetail from '@/app/clientComponent/SingleProductDetail'
import SimilarItems from '@/app/clientComponent/SimilarItems'

const singleProduct = async ({ params }: { params: { singleProductId: string } }) => {
    const { data } = await axios.get(`${process.env.API_URL}/api/product/${params.singleProductId}`)
    const productData = await axios.get(`${process.env.API_URL}/api/product`);
    return (
        <div>
            <SingleProductDetail singleProductData={data.singleProductDetail} />
            <SimilarItems allProductData={productData.data.products} productCateogary={data.singleProductDetail.category} />
        </div>
    )
}

export default singleProduct

