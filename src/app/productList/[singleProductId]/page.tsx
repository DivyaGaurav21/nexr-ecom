import axios from "axios"
import SingleProductDetail from '@/app/clientComponent/SingleProductDetail'

const singleProduct = async ({ params }: { params: { singleProductId: string } }) => {
    const { data } = await axios.get(`${process.env.API_URL}/api/product/${params.singleProductId}`)
    return (
        <div>
            <SingleProductDetail singleProductData={data.singleProductDetail} />
        </div>
    )
}

export default singleProduct

