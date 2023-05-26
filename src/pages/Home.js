import Banner from "@/components/Banner";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Newsletter from "@/components/Newsletter";
import StarProducts from "@/components/StarProducts";
import Trending from "@/components/Trending";
import Banner1 from "../img/banner/banner1.jpg";
import Banner2 from "../img/banner/banner2.jpg";
import { useState } from "react";
import CartProvider from "@/context/CartProvider";
import Cart from "@/components/Cart/Cart";

const HomePage = () => {
  const [showCart, setShowCart] = useState(false);

  const openCartHandler = () => {
    setShowCart(true);
  };
  const closeCartHandler = () => {
    setShowCart(false);
  };

  return (
    <CartProvider>
      {showCart && <Cart onCloseCart={closeCartHandler} show={showCart} />}
      <Navbar onOpenCart={openCartHandler} />
      <Hero />
      <StarProducts />
      <Banner
        type="normal"
        title="Creative harmonious living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner1}
      />
      <Trending />
      <Banner
        type="reverse"
        title="Comfortable & Elegante Living"
        text=" RAOUF Products are all made to standard sizes so that you can mix and match them freely."
        img={Banner2}
      />
      <Newsletter />
      <Footer />
    </CartProvider>
  );
};

export default HomePage;
