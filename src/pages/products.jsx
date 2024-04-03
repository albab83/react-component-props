import CardProduct from "../component/Fragments/CardProducts"
const ProductsPage = () => {

    return (
        <div className="flex justify-center py-5">
            <CardProduct>
                <CardProduct.Header></CardProduct.Header>
                <CardProduct.Body></CardProduct.Body>
                <CardProduct.Footer></CardProduct.Footer>
            </CardProduct>
        </div>
    )
}



export default ProductsPage