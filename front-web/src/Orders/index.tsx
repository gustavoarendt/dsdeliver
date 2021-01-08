import { useEffect, useState } from "react"
import { fetchProducts } from "../api"
import Footer from "../Footer"
import OrderLocation from "./OrderLocation"
import ProductsList from "./ProductsList"
import StepHeaders from "./StepHeaders"
import './styles.css'
import { OrderLocationData, Product } from "./types"

const Orders = () => {

    const [products, setProducts] = useState<Product[]>([]);
    // eslint-disable-next-line
    const [orderLocation, setOrderLocation] = useState<OrderLocationData>();
    console.log(products);

    useEffect(() => {
        fetchProducts()
            .then(response => setProducts(response.data))
            .catch(error => console.log(error))
    }, []);

    return (
        <div className="orders-container">
            <StepHeaders />
            <ProductsList products={products} />
            <OrderLocation onChangeLocation={location => setOrderLocation(location)}/>
            <Footer />
        </div>
    )
}

export default Orders;