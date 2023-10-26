import axios from "axios";
import ProductList from "./ProductList";

const page = async () => {
    const productData = await axios.get(`${process.env.API_URL}/api/product`);
    return (
        <ProductList allProductData={productData.data} />
    )
}

export default page
