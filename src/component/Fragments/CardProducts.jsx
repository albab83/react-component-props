import Button from "../Elements/Button"




const CardProducts = (props) => {
    const { children } = props

    return (
        <div className="w-full max-w-xs bg-slate-700 border border-slate-300 rounded-lg shadow-lg flex flex-col justify-between">
           {children}
        </div>
    )
}

const Header = (props) => {
    const { image } = props
    return (
        <a href=""><img src={image} alt="products" className="p-8 rounded-t-lg" /></a>
    )
}

const Footer = (props) => {
    const {harga, children} = props
    return (
        <div className="flex items-center justify-between px-9 pb-5 flex-wrap gap-2">
            <span className="text-s font-semibold text-white">{harga}</span>
            <Button classname="bg-green-500 text-white w-full hover:bg-green-400">{children}</Button>
        </div>
    )
}

const Body = (props) => {

    const {title, children} = props
    return (
        <div className="px-9 pb-5 h-full">
            <a href="">
                <h5 className="text-white font-semibold">{title}</h5>
            </a>
            <p className="text-m text-white">{children}</p>
        </div>
    )
}

CardProducts.Header = Header
CardProducts.Body = Body
CardProducts.Footer = Footer

export default CardProducts