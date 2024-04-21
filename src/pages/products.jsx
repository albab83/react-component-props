import CardProducts from "../component/Fragments/CardProducts"

const products = [
    {
       id: 1,
       title: 'Sepatu',
       harga: 'Rp.200.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product1.jpg',
    },
    {
       id: 2,
       title: 'Sepatu',
       harga: 'Rp.200.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product2.jpg',
    },
    {
       id: 3,
       title: 'Sepatu',
       harga: 'Rp.200.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product3.jpg',
    },
    {
       id: 4,
       title: 'Sepatu',
       harga: 'Rp.250.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product4.jpeg',
    },
    {
       id: 5,
       title: 'Sepatu',
       harga: 'Rp.200.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product5.jpeg',
    },
    {
       id: 6,
       title: 'Sepatu',
       harga: 'Rp.300.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product6.jpeg',
    },
    {
       id: 7,
       title: 'Sepatu',
       harga: 'Rp.200.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product7.jpeg',
    },
    {
       id: 8,
       title: 'Sepatu',
       harga: 'Rp.200.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product1.jpg',
    },
    {
       id: 9,
       title: 'Sepatu',
       harga: 'Rp.200.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product1.jpg',
    },
    {
       id: 10,
       title: 'Sepatu',
       harga: 'Rp.500.000',
       description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. A, accusantium repellat qui optio mollitia laborum vel odit, dolores, officiis totam quis ab nisi reiciendis eveniet magnam rem sunt exercitationem! Labore.',
       image: '/image/product1.jpg',
    }
]

const ProductsPage = () => {
    return (
        <div className="flex justify-center py-5 gap-4 flex-wrap">
            {products.map((product) => {
                return (
                    <CardProducts>
                        <CardProducts.Header image={product.image}/>
                        <CardProducts.Body title={product.title}>{product.description}</CardProducts.Body>
                        <CardProducts.Footer harga={product.harga}>add cart</CardProducts.Footer>
                    </CardProducts>
                )    
            })}
            
        </div>
    )
}

export default ProductsPage