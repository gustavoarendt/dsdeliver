import { useEffect, useState } from "react"
import { fetchProducts } from "../api"
import ProductsList from "./ProductsList"
import StepHeaders from "./StepHeaders"
import './styles.css'
import { Product } from "./types"

const Orders = () => {

    const [products, setProducts] = useState<Product[]>([]);
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
        </div>
    )
}

export default Orders;