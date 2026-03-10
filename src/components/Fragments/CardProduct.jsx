import Button from "../Elements/Button";

export default function CardProduct({ children }) {
  return (
    <div className="w-full bg-gray-800 border border-gray-700 rounded-lg shadow flex flex-col justify-between">
      {children}
    </div>
  );
}

function Header({ image }) {
  return (
    <a href="#">
      <img src={image} alt="product" className="w-full p-8 rounded-t-lg h-60 object-cover" />
    </a>
  );
}

function Body({ children, name }) {
  return (
    <div className="px-5 pb-5 h-full">
      <a href="#">
        <h5 className="text-xl font-semibold tracking-tight text-white">
          {name.substring(0, 20)}...
        </h5>
        <p className="text-white">{children.substring(0,100)}...</p>
      </a>
    </div>
  );
}

function Footer({ price, handleAddToCart, id }) {
  return (
    <div className="flex items-center justify-between px-5 pb-5">
      <span className="text-xl font-bold text-white">
        $
        {price.toLocaleString("id-ID", { styles: "currency", currency: "USD" })}
      </span>
      <Button classname="bg-blue-600" onClick={() => handleAddToCart(id)}>
        Add To Cart
      </Button>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;
