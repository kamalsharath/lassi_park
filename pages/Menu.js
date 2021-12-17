import Layout from "../components/Layout-components/Layout";
import MenuSection1 from "../components/Menu/MenuSection1";
import MenuSection2 from "../components/Menu/MenuSection2";
import { Example } from "../components/Home/Photos";
import SectionTwo from "../components/Home/SectionTwo";
import ContactUs from "../components/Home/ContactUs";

const Menu = () => {
  return (
    <>
      <Layout>
        <MenuSection1 />
        <Example />
        <MenuSection2 />
        <SectionTwo />
        <ContactUs />
      </Layout>
    </>
  );
};
export default Menu;
