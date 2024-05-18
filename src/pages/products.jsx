import React from "react"
import CardProducts from "../component/Fragments/CardProducts"
import { Fragment, useState } from "react"
import Button from "../component/Elements/Button"

const products = [
    {
       id: 1,
       title: 'Sepatu',
       harga: 1500000,
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product1.jpg',
    },
    {
       id: 2,
       title: 'Sepatu',
       harga: 900000,
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product2.jpg',
    },
    {
       id: 3,
       title: 'Sepatu',
       harga: 450000,
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product3.jpg',
    }
]

const email = localStorage.getItem("email")

const ProductsPage = () => {

    const [cart, setCart] = useState([
        {
            name: "Sepatu Lama",
            qty: 1
        }
    ])

    const handleLogout = () => {
        localStorage.removeItem("email")
        localStorage.removeItem("password")
        window.location.href = "/login"
    }
    return (
        <Fragment>
            <div className="flex justify-end bg-blue-600 h-20 text-white items-center pe-5">
                <p className="mx-3">{email}</p>
                <Button classname="bg-red-500" onClick={handleLogout}>Logout</Button>
            </div>
            <div className="flex py-5 gap-4">
                <div className="flex py-5 gap-4 flex-wrap w-3/4 justify-center">
                    {products.map((product, id) => {
                        return (
                            <CardProducts key={id}>
                                <CardProducts.Header image={product.image}/>
                                <CardProducts.Body title={product.title}>{product.description}</CardProducts.Body>
                                <CardProducts.Footer harga={product.harga}>add cart</CardProducts.Footer>
                            </CardProducts>
                        )    
                    })}
                </div>

                <div className="w-1/4">
                    <h1 className="text-3xl font-bold text-blue-600">Cart</h1>
                    <ul>
                        {cart.map((item) => {
                            return (
                                <li key={item.name}>{item.name}</li>
                            )
                        })}
                    </ul>
                </div>
                
            </div>
        </Fragment>
    )
}

export default ProductsPage