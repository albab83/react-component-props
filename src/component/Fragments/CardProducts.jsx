import Button from "../Elements/Button"

const CardProducts = (props) => {
    const { children } = props

    return (
        <div className="w-full max-w-xs bg-slate-600 border border-slate-300 rounded-lg shadow-lg">
           {children}
        </div>
    )
}

const Header = () => {
    return (
        <a href=""><img src="/image/product1.jpg" alt="products" className="p-8 rounded-t-lg" /></a>
    )
}

const Footer = () => {
    return (
        <div className="flex items-center justify-between px-9 pb-5 flex-wrap gap-2">
            <span className="text-s font-semibold text-white">Rp. 1000.000</span>
            <Button classname="bg-green-500 text-white w-full hover:bg-green-400">Add to cart</Button>
        </div>
    )
}

const Body = () => {
    return (
        <div className="px-9 pb-5">
            <a href="">
                <h5 className="text-white font-semibold">Sepatu baru</h5>
            </a>
            <p className="text-m text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, magni.</p>
        </div>
    )
}

CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

export default CardProducts