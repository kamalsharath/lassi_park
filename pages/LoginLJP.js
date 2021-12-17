import ContactUs from "../components/Home/ContactUs";
import SectionTwo from "../components/Home/SectionTwo";
import Layout from "../components/Layout-components/Layout";
import Login from "../components/Login";

const LoginLjp = () => {
  return (
    <>
      <Layout>
        <Login />
        <SectionTwo />
        <ContactUs />
      </Layout>
    </>
  );
};
export default LoginLjp;
