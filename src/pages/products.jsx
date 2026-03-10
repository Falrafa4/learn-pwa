import { useEffect, useRef, useState } from "react";
import Button from "../components/Elements/Button";
import CardProduct from "../components/Fragments/CardProduct";
import Counter from "../components/Fragments/Counter";
import { getProducts } from "../services/product.service";
import { getUsername } from "../services/auth.service";

export default function ProductsPage() {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [username, setUsername] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  function handleAddToCart(id) {
    if (cart.find((item) => item.id === id)) {
      setCart(
        cart.map((item) =>
          item.id === id ? { ...item, qty: item.qty + 1 } : item,
        ),
      );
    } else {
      setCart([...cart, { id, qty: 1 }]);
    }
  }

  useEffect(() => {
    document.title = "Product List";

    const token = localStorage.getItem("token");
    if (token) {
      setUsername(getUsername(token));
    } else {
      window.location.href = "/login";
    }

    setCart(JSON.parse(localStorage.getItem("cart")) || []);

    getProducts((data) => {
      setProducts(data);
    });
  }, []);

  // update total price
  useEffect(() => {
    if (products.length > 0 && cart.length > 0) {
      const sum = cart.reduce((acc, item) => {
        const product = products.find((product) => product.id === item.id);
        return acc + product.price * item.qty;
      }, 0);
      setTotalPrice(sum);
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart, products]);

  function handleLogout() {
    localStorage.removeItem("token");
    window.location.href = "/login";
  }

  // useRef
  const cartRef = useRef(JSON.parse(localStorage.getItem("cart")) || []);

  function handleToggle() {
    setIsOpen(prev => !prev);
  }

  function handleAddToCartRef(id) {
    cartRef.current = [...cartRef.current, { id, qty: 1 }];
    localStorage.setItem("cart", JSON.stringify(cartRef.current));
  }

  const totalPriceRef = useRef(null);
  useEffect(() => {
    if (cart.length > 0) {
      totalPriceRef.current.style.display = "table-row";
    } else {
      totalPriceRef.current.style.display = "none";
    }
  }, [cart]);

  return (
    <>
      <nav className="bg-blue-600 text-white flex justify-between items-center px-5 md:px-8 lg:px-15 py-5">
        <h1 className="text-3xl font-bold">Store</h1>
        <div className="justify-end gap-5 items-center hidden md:flex">
          {username}
          <Button onClick={handleLogout}>Logout</Button>
        </div>
        <div className="hover:cursor-pointer block md:hidden" id="toggle" onClick={handleToggle}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="24px"
            viewBox="0 -960 960 960"
            width="24px"
            fill="#FFFFFF"
          >
            <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
          </svg>
        </div>
        <div className={`menu border-t border-white p-5 flex-col items-center gap-4 absolute top-19 left-0 bg-blue-600 w-full h-fit ${isOpen ? 'flex' : 'hidden'}`}>
          {username}
          <Button onClick={handleLogout}>Logout</Button>
        </div>
      </nav>
      <main className="flex flex-col-reverse gap-5 lg:flex-row justify-center py-7 px-5 md:px-8 lg:px-15">
        <div className="w-full lg:w-4/6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.length > 0 &&
            products.map((product) => (
              <CardProduct key={product.id}>
                <CardProduct.Header image={product.image} />
                <CardProduct.Body name={product.title}>
                  {product.description}
                </CardProduct.Body>
                <CardProduct.Footer
                  price={product.price}
                  id={product.id}
                  handleAddToCart={handleAddToCart}
                />
              </CardProduct>
            ))}
        </div>
        <div className="w-full lg:w-2/6">
          <h1 className="text-3xl font-bold text-blue-600 mb-2">Cart</h1>
          <table className="w-full lg:w-4/5 text-left table-auto border-spacing-x-5 pr-5">
            <thead>
              <tr>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {cart.length == 0 ? (
                <tr>
                  <td colSpan="4" className="text-center italic">
                    No Data
                  </td>
                </tr>
              ) : (
                products.length > 0 &&
                cart.map((item) => {
                  const product = products.find(
                    (product) => product.id === item.id,
                  );
                  return (
                    <tr key={item.id}>
                      <td>{product.title.substring(0, 10)}...</td>
                      <td>
                        $
                        {product.price.toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                      <td>{item.qty}</td>
                      <td>
                        $
                        {(item.qty * product.price).toLocaleString("id-ID", {
                          styles: "currency",
                          currency: "USD",
                        })}
                      </td>
                    </tr>
                  );
                })
              )}
              <tr ref={totalPriceRef}>
                <td colSpan={3}>
                  <strong>Total Price</strong>
                </td>
                <td>
                  <strong>
                    $
                    {totalPrice.toLocaleString("id-ID", {
                      styles: "currency",
                      currency: "USD",
                    })}
                  </strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </>
  );
}
