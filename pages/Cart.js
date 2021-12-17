import CartItems from "../components/cartItems";
import ContactUs from "../components/Home/ContactUs";
import SectionTwo from "../components/Home/SectionTwo";
import Layout from "../components/Layout-components/Layout";

const Cart = () => {
  return (
    <>
      <Layout>
        <CartItems />
        <SectionTwo />
        <ContactUs />
      </Layout>
    </>
  );
};
export default Cart;
